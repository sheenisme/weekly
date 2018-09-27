import Vue from 'vue'
import Router from 'vue-router'

// 登陆
const login = () => import("@/views/login/index")

// 布局
const home = () => import("@/views/home");
//首页
const dashBoard = () => import("@/views/dashBoard/dashBoard");

// 周报管理
const weeklyView = () => import("@/views/departmentManage/weeklyView");
const memberList = () => import("@/views/departmentManage/memberList");

// 写当前周
const writeWeekly = () => import("@/views/writeWeekly/index");
//历史周报
const weeklyList = () => import("@/views/weeklyList/index");

//公司管理-管理部门
const companyManage = () => import("@/views/companyManagement/index");
//管理员-管理公司
const adminCompany = () => import("@/views/admin/adminCompany");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        zhName: '登陆',
        key: '0'
      },
      component: login
    }, {
      path: '/',
      name: 'home',
      redirect: '/writeWeekly',
      meta: {
        zhName: '主页',
        key: '1'
      },
      component: home
    }, {
      path: '/index',
      name: 'index',
      component: home,
      isNest: false,
      redirect: '/dashBoard',
      meta: {
        zhName: '概览',
        key: '0',
        role: 3
      },
      children: [{
        path: '/dashBoard',
        name: 'dashBoard',
        icon: 'el-icon-view',
        meta: {
          zhName: '概览',
          key: '0-1',
          role: 3
        },
        component: dashBoard
      }]
    }, {
      path: '/admin',
      name: 'admin',
      isNest: true,
      icon: 'el-icon-setting',
      component: home,
      meta: {
        zhName: '管理员管理',
        key: '5',
        role: 1
      },
      children: [{
        path: '/adminCompany',
        name: 'adminCompany',
        component: adminCompany,
        meta: {
          zhName: '管理公司',
          key: '5-1',
          role: 2
        }
      }]
    }, {
      path: '/setting',
      name: 'setting',
      isNest: true,
      icon: 'el-icon-setting',
      component: home,
      meta: {
        zhName: '公司管理',
        key: '4',
        role: 2
      },
      children: [{
        path: '/companyManage',
        name: 'companyManage',
        component: companyManage,
        meta: {
          zhName: '管理部门',
          key: '4-1',
          role: 2
        }
      }]
    }, {
      path: '/departmentManage',
      name: 'departmentManage',
      isNest: true,
      icon: 'el-icon-menu',
      component: home,
      meta: {
        zhName: '部门管理',
        key: '1',
        role: 3
      },
      children: [{
        path: '/weeklyView',
        name: 'weeklyView',
        component: weeklyView,
        meta: {
          zhName: '周报管理',
          key: '1-1',
          role: 3
        }
      }, {
        path: '/memberList',
        name: 'memberList',
        component: memberList,
        meta: {
          zhName: '成员管理',
          key: '1-2',
          role: 2
        }
      }]
    }, {
      path: '/write',
      name: 'write',
      component: home,
      isNest: false,
      redirect: '/writeWeekly',
      meta: {
        zhName: '写周报',
        key: '2',
        role: 4
      },
      children: [{
        path: '/writeWeekly',
        name: 'writeWeekly',
        icon: 'el-icon-edit',
        meta: {
          zhName: '写周报',
          key: '2-1',
          role: 4
        },
        component: writeWeekly
      }]
    }, {
      path: '/list',
      name: 'list',
      component: home,
      isNest: false,
      redirect: '/weeklyList',
      meta: {
        zhName: '周报列表',
        key: '3',
        role: 4
      },
      children: [{
        path: '/weeklyList',
        name: 'weeklyList',
        isNest: false,
        icon: 'el-icon-search',
        meta: {
          zhName: '历史周报',
          key: '3-1',
          role: 4
        },
        component: weeklyList
      }]
    }
  ]
})
