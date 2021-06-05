<template>
  <a-dropdown v-if="currentUser" placement="bottomRight">
    <span class="ant-pro-account-avatar">
      <a-avatar icon="user" class="antd-pro-global-header-index-avatar" />
      <span>{{ currentUser.login && currentUser.login.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2') }}</span>
    </span>
    <template v-slot:overlay>
      <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
        <a-menu-item v-if="menu" @click="handleToSettings">
          <a-icon type="setting" />
          个人设置
        </a-menu-item>
        <a-menu-item v-if="menu && currentUser.authorities.indexOf('ROLE_MANAGER') >= 0" @click="handleToUserManage">
          <a-icon type="swap" />
          {{ isAdmin ? '中介端' : '管理端' }}
        </a-menu-item>
        <a-menu-divider v-if="menu" />
        <a-menu-item key="logout" @click="handleLogout">
          <a-icon type="logout" />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span>
</template>

<script>
import { Modal } from 'ant-design-vue'
import { mapState } from 'vuex'

export default {
  name: 'AvatarDropdown',
  props: {
    menu: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      isAdmin: false
    }
  },
  created: function () {
    this.isAdmin = localStorage.getItem('isAdmin') === 'true'
  },
  computed: mapState({
    currentUser: state => state.user.info
  }),
  methods: {
    handleToCenter () {
      this.$router.push({ path: '/account/center' })
    },
    handleToSettings () {
      this.$router.push({ path: '/account/settings' })
    },
    handleToUserManage () {
      if (this.isAdmin) {
        localStorage.removeItem('isAdmin')
        location.href = '/'
      } else {
        localStorage.setItem('isAdmin', 'true')
        location.href = '/ticket-manage'
      }
    },
    handleLogout (e) {
      Modal.confirm({
        title: this.$t('layouts.usermenu.dialog.title'),
        content: this.$t('layouts.usermenu.dialog.content'),
        onOk: () => {
          // return new Promise((resolve, reject) => {
          //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1500)
          // }).catch(() => console.log('Oops errors!'))
          return this.$store.dispatch('Logout').then(() => {
            // this.$router.push({ name: 'login' })
            location.href = '/user/login'
          })
        },
        onCancel () {}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
</style>
