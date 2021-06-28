// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/house/query',
    children: [
      // dashboard
      {
        path: '/house/query',
        name: 'house',
        component: () => import('@/pages/workspace/HouseQuery'),
        meta: { title: '房源查询', keepAlive: true, icon: bxAnaalyse }
      },
      {
        path: '/myticket',
        name: 'myticket',
        component: () => import('@/pages/workspace/MyTicket'),
        meta: { title: '私单', keepAlive: true, icon: 'align-center' }
      },
      {
        path: '/public-ticket',
        name: 'TicketManage',
        component: () => import('@/pages/workspace/TicketManage'),
        meta: { title: '公单', keepAlive: true, icon: 'form' }
      },
      {
        path: '/ticket-manage',
        name: 'TicketManage',
        authority: ['ROLE_ADMIN'],
        component: () => import('@/pages/workspace/TicketManage'),
        meta: { title: '订单分配', keepAlive: true, icon: 'form' }
      },
      {
        path: '/ticket-form',
        name: 'TicketForm',
        hidden: true,
        component: () => import('@/pages/workspace/TicketForm'),
        meta: { title: '录入客户信息' }
      },
      {
        path: '/yun-pan',
        name: 'YunPan',
        component: () => import('@/pages/workspace/YunPan'),
        authority: ['ROLE_ADMIN', 'ROLE_USER'],
        meta: { title: '资料中心', keepAlive: true, icon: 'database' }
      },
      {
        path: '/user-manage',
        name: 'UserManage',
        authority: ['ROLE_ADMIN'],
        component: () => import('@/pages/user/UserManage'),
        meta: { title: '用户管理', keepAlive: true, icon: 'table' }
      },
      {
        path: '/house/query/overview',
        name: 'HouseOverview',
        hidden: true,
        component: () => import('@/pages/workspace/HouseOverview'),
        meta: { title: '房屋概览' }
      },
      {
        path: '/house/query/huildingoverview',
        name: 'BuildingOverview',
        hidden: true,
        component: () => import('@/pages/workspace/BuildingOverview'),
        meta: { title: '楼盘概览' }
      },
      // account
      {
        path: '/account/settings',
        name: 'settings',
        component: () => import('@/pages/account/settings/Index'),
        meta: { title: '个人设置', icon: 'user' },
        redirect: '/account/settings/custom',
        authority: ['ROLE_ADMIN', 'ROLE_USER'],
        hideChildrenInMenu: true,
        children: [
          {
            path: '/account/settings/base',
            name: 'BaseSettings',
            component: () => import('@/pages/account/settings/ChangePassword'),
            meta: { title: '修改密码', hidden: true }
          },
          {
            path: '/account/settings/security',
            name: 'SecuritySettings',
            component: () => import('@/pages/account/settings/Security'),
            meta: { title: '安全设置', hidden: true, keepAlive: true }
          },
          {
            path: '/account/settings/changepassword',
            name: 'ChangePassword',
            component: () => import('@/pages/account/settings/ChangePassword'),
            meta: { title: '修改密码', hidden: true, keepAlive: true }
          },
          {
            path: '/account/settings/custom',
            name: 'CustomSettings',
            component: () => import('@/pages/account/settings/Custom'),
            meta: { title: '个性化设置', hidden: true, keepAlive: true }
          },
          {
            path: '/account/settings/binding',
            name: 'BindingSettings',
            component: () => import('@/pages/account/settings/Binding'),
            meta: { title: '账户绑定', hidden: true, keepAlive: true }
          },
          {
            path: '/account/settings/notification',
            name: 'NotificationSettings',
            component: () => import('@/pages/account/settings/Notification'),
            meta: { title: '新消息通知', hidden: true, keepAlive: true }
          }
        ]
      }
    ]
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/pages/user/Login')
      },
      // {
      //   path: 'change-password',
      //   name: 'change-password',
      //   component: () => import(/* webpackChunkName: "user" */ '@/pages/user/ChangePassword')
      // },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  // Exception
  {
    path: '/exception',
    name: 'exception',
    component: RouteView,
    redirect: '/exception/403',
    meta: { title: '异常页', icon: 'warning', permission: ['ROLE_ADMIN'] },
    children: [
      {
        path: '/exception/403',
        name: 'Exception403',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
        meta: { title: '403', permission: ['exception'] }
      },
      {
        path: '/exception/404',
        name: 'Exception404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
        meta: { title: '404', permission: ['exception'] }
      },
      {
        path: '/exception/500',
        name: 'Exception500',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
        meta: { title: '500', permission: ['exception'] }
      }
    ]
  }
]
