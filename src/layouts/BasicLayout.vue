<template>
  <pro-layout
    :collapsed="collapsed"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    :i18nRender="i18nRender"
    :menus="menus"
    v-bind="settings"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img
          @click="$router.push({ path: '/house/query' })"
          src="../assets/logo.png"
          alt="985"
          style="cursor: pointer"
        />
        <h1 style="cursor: pointer" @click="$router.push({ path: '/house/query' })">
          {{ title }} <span style="font-size: 8px; color: blue">v1.4.7</span>
        </h1>
      </div>
    </template>

    <!-- <setting-drawer :settings="settings" @change="handleSettingChange" /> -->
    <template v-slot:rightContentRender>
      <right-content :top-menu="settings.layout === 'topmenu'" :is-mobile="isMobile" :theme="settings.theme" />
    </template>
    <template v-slot:footerRender>
      <global-footer />
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import { SettingDrawer, updateTheme } from '@ant-design-vue/pro-layout'
import { i18nRender } from '@/locales'
import { mapState } from 'vuex'
import { CONTENT_WIDTH_TYPE, SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'

import defaultSettings from '@/config/defaultSettings'
import RightContent from '@/components/GlobalHeader/RightContent'
import GlobalFooter from '@/components/GlobalFooter'
import { asyncRouterMap } from '@/config/router.config.js'

export default {
  name: 'BasicLayout',
  components: {
    SettingDrawer,
    RightContent,
    GlobalFooter
  },
  data () {
    return {
      // preview.pro.antdv.com only use.
      isProPreviewSite: process.env.VUE_APP_PREVIEW === 'true' && process.env.NODE_ENV !== 'development',
      // end

      // base
      menus: [],
      // 侧栏收起状态
      collapsed: true,
      title: defaultSettings.title,
      settings: {
        // 布局类型
        layout: defaultSettings.layout, // 'sidemenu', 'topmenu'
        // CONTENT_WIDTH_TYPE
        contentWidth: defaultSettings.layout === 'sidemenu' ? CONTENT_WIDTH_TYPE.Fluid : defaultSettings.contentWidth,
        // 主题 'dark' | 'light'
        theme: defaultSettings.navTheme,
        // 主色调
        primaryColor: defaultSettings.primaryColor,
        fixedHeader: defaultSettings.fixedHeader,
        fixSiderbar: defaultSettings.fixSiderbar,
        colorWeak: defaultSettings.colorWeak,

        hideHintAlert: false,
        hideCopyButton: true
      },
      // 媒体查询
      query: {},

      // 是否手机模式
      isMobile: false,
      isAdmin: localStorage.getItem('isAdmin') === 'true'
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters,
      currentUser: state => state.user.info
    })
  },
  created () {
    // const routes = this.mainMenu.find((item) => item.path === '/')
    // 处理侧栏收起状态
    this.$watch('collapsed', () => {
      this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    })
    this.$watch('isMobile', () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile)
    })
    if (this.currentUser) {
      const asyncRouter = this.filterAsyncRouter(asyncRouterMap, this.currentUser.authorities)
      const routes = asyncRouter.find(item => item.path === '/')
      this.menus = (routes && routes.children) || []
    }
  },
  mounted () {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }

    // first update color
    // TIPS: THEME COLOR HANDLER!! PLEASE CHECK THAT!!
    if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
      updateTheme(this.settings.primaryColor)
    }
  },
  methods: {
    i18nRender,
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
        this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse (val) {
      this.collapsed = val
    },
    handleSettingChange ({ type, value }) {
      console.log('type', type, value)
      type && (this.settings[type] = value)
      switch (type) {
        case 'contentWidth':
          this.settings[type] = value
          break
        case 'layout':
          if (value === 'sidemenu') {
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
          } else {
            this.settings.fixSiderbar = false
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fixed
          }
          break
      }
    },
    filterAsyncRouter (routerMap, roles) {
      // 普通用户 || 选择了普通用户
      if (roles.indexOf('ROLE_ADMIN') < 0 || (roles.indexOf('ROLE_ADMIN') >= 0 && !this.isAdmin)) {
        // 查询普通用户菜单
        return routerMap.filter(route => {
          if (!route.authority) {
            if (route.children && route.children.length) {
              route.children = this.filterAsyncRouter(route.children, roles)
            }
            return true
          }
          return false
        })
      } else {
        // 查询管理员菜单
        return routerMap.filter(route => {
          if (route.authority || route.path === '/') {
            if (route.children && route.children.length) {
              route.children = this.filterAsyncRouter(route.children, roles)
            }
            return true
          }
          return false
        })
      }
    }
  }
}
</script>

<style lang="less">
@import './BasicLayout.less';
</style>
