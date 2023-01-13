import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import ParentView from '@/components/ParentView'

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name:'user',
    meta: { title: '用户信息', icon: 'user' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'admini',
        component: () => import('@/views/user/admin'),
        name: 'admini',
        meta: { title: 'DACT管理员' },
      } ,
      {
        path: 'projectAdmin',
        component: () => import('@/views/user/projectAdmin'),
        name: 'projectAdmin',
        meta: { title: '项目管理员' },
      } ,
      {
        path: 'projectMembers',
        component: () => import('@/views/user/projectMembers'),
        name: 'projectMembers',
        meta: { title: '项目成员' },
      } ,
      {
        path: 'projectPersonnelPool',
        component: () => import('@/views/user/projectPersonnelPool'),
        name: 'projectPersonnelPool',
        meta: { title: '项目人员池' },
      } ,
    ]
  },
  {
    path: '/networkSecurity',
    component: Layout,
    name:'networkSecurity',
    meta: { title: '项目网络安全管理', icon: 'user' },
    redirect: 'noRedirect',
    alwaysShow:true,
    children: [
      {
        path: 'ProjectProcess',
        component:ParentView,
        name: 'ProjectProcess',
        redirect: 'noRedirect',
        meta: { title: '项目流程管理' },
        alwaysShow:true,
        children: [
          {
            path: 'SecurityPlanning',
            component: () => import('@/views/ProjectProcess/SecurityPlanning'),
            name: 'SecurityPlanning',
            meta: { title: '安全规化' },
          },
          {
            path: 'SafetyAnalysis',
            component: () => import('@/views/ProjectProcess/SafetyAnalysis'),
            name: 'SafetyAnalysis',
            meta: { title: '安全分析' },
          },
          {
            path: 'SafetyDesign',
            component: () => import('@/views/ProjectProcess/SafetyDesign'),
            name: 'SafetyDesign',
            meta: { title: '安全设计' },
          },
          {
            path: 'SecurityImplementation',
            component: () => import('@/views/ProjectProcess/SecurityImplementation'),
            name: 'SecurityImplementation',
            meta: { title: '安全实施' },
          },
          {
            path: 'SecurityVerification',
            component: () => import('@/views/ProjectProcess/SecurityVerification'),
            name: 'SecurityVerification',
            meta: { title: '安全验证' },
          },
          {
            path: 'SafetyConfirmation',
            component: () => import('@/views/ProjectProcess/SafetyConfirmation'),
            name: 'SafetyConfirmation',
            meta: { title: '安全确认' },
          },
          {
            path: 'SafetyAssessment',
            component: () => import('@/views/ProjectProcess/SafetyAssessment'),
            name: 'SafetyAssessment',
            meta: { title: '安全评估' },
          },
          {
            path: 'SafeRelease',
            component: () => import('@/views/ProjectProcess/SafeRelease'),
            name: 'SafeRelease',
            meta: { title: '安全放行' },
          },
          {
            path: 'SafeProduction',
            component: () => import('@/views/ProjectProcess/SafeProduction'),
            name: 'SafeProduction',
            meta: { title: '安全生产' },
          },
          {
            path: 'Safe0peration',
            component: () => import('@/views/ProjectProcess/Safe0peration'),
            name: 'Safe0peration',
            meta: { title: '安全运维' },
          },
          {
            path: 'SafeDeactivation',
            component: () => import('@/views/ProjectProcess/SafeDeactivation'),
            name: 'SafeDeactivation',
            meta: { title: '安全停运' },
          },
        ]
      } ,
      {
        path: 'ProjectEngineering',
        component:ParentView,
        name: 'ProjectEngineering',
        redirect: 'noRedirect',
        alwaysShow:true,
        meta: { title: '项目工程管理' },
        children: [
          {
            path: 'VehicleSystem',
            component:ParentView,
            name: 'VehicleSystem',
            meta: { title: '车辆系统' },
            redirect: 'noRedirect',
            alwaysShow:true,
            children: [
              {
                path: 'RiskAnalysis',
                component: () => import('@/views/ProjectEngineering/VehicleSystem/RiskAnalysis'),
                name: 'RiskAnalysis',
                meta: { title: '风险分析' },
              },
              {
                path: 'ConceptualDesign',
                component: () => import('@/views/ProjectEngineering/VehicleSystem/ConceptualDesign'),
                name: 'ConceptualDesign',
                meta: { title: '概念设计' },
              },
              {
                path: 'SafetySpecifications',
                component: () => import('@/views/ProjectEngineering/VehicleSystem/SafetySpecifications'),
                name: 'SafetySpecifications',
                meta: { title: '安全规范' },
              },
              {
                path: 'SecurityVerification',
                component: () => import('@/views/ProjectEngineering/VehicleSystem/SecurityVerification'),
                name: 'SecurityVerification',
                meta: { title: '安全验证' },
              },
              {
                path: 'SafetyConfirmation',
                component: () => import('@/views/ProjectEngineering/VehicleSystem/SafetyConfirmation'),
                name: 'SafetyConfirmation',
                meta: { title: '安全确认' },
              },
            ]
          },
          {
            path: 'FunctionalSystem',
            component:ParentView,
            name: 'FunctionalSystem',
            meta: { title: '车辆系统' },
            redirect: 'noRedirect',
            alwaysShow:true,
            children: [
              {
                path: 'RiskAnalysis',
                component: () => import('@/views/ProjectEngineering/FunctionalSystem/RiskAnalysis'),
                name: 'RiskAnalysis',
                meta: { title: '风险分析' },
              },
              {
                path: 'ConceptualDesign',
                component: () => import('@/views/ProjectEngineering/FunctionalSystem/ConceptualDesign'),
                name: 'ConceptualDesign',
                meta: { title: '概念设计' },
              },
              {
                path: 'SafetySpecifications',
                component: () => import('@/views/ProjectEngineering/FunctionalSystem/SafetySpecifications'),
                name: 'SafetySpecifications',
                meta: { title: '安全规范' },
              },
              {
                path: 'SecurityVerification',
                component: () => import('@/views/ProjectEngineering/FunctionalSystem/SecurityVerification'),
                name: 'SecurityVerification',
                meta: { title: '安全验证' },
              },
              {
                path: 'SafetyConfirmation',
                component: () => import('@/views/ProjectEngineering/FunctionalSystem/SafetyConfirmation'),
                name: 'SafetyConfirmation',
                meta: { title: '安全确认' },
              },
            ]
          },
          {
            path: 'SpareParts',
            component: () => import('@/views/ProjectEngineering/SpareParts'),
            name: 'SpareParts',
            meta: { title: '零部件' },
          },
        ]
      } ,
    ]
  },
  {
    path: '/SafetyActivities',
    component: Layout,
    name:'SafetyActivities',
    meta: { title: '持续网络安全活动', icon: 'user' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'AssetManagement',
        component: () => import('@/views/SafetyActivities/AssetManagement'),
        name: 'AssetManagement',
        meta: { title: '资产管理' },
      } ,
      {
        path: 'SafetyMonitoring',
        component: () => import('@/views/SafetyActivities/SafetyMonitoring'),
        name: 'SafetyMonitoring',
        meta: { title: '安全监控' },
      } ,
      {
        path: 'VulnerabilityManagement',
        component: () => import('@/views/SafetyActivities/VulnerabilityManagement'),
        name: 'VulnerabilityManagement',
        meta: { title: '漏洞管理' },
      } ,
      {
        path: 'EventManagement',
        component: () => import('@/views/SafetyActivities/EventManagement'),
        name: 'EventManagement',
        meta: { title: '事件管理' },
      } ,
    ]
  },
  {
    path: '/SecurityGovernance',
    component: Layout,
    name:'SecurityGovernance',
    meta: { title: '企业网络安全治理', icon: 'user' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'SecurityPolicy',
        component: () => import('@/views/SecurityGovernance/SecurityPolicy'),
        name: 'SecurityPolicy',
        meta: { title: '安全策略' },
      } ,
      {
        path: 'SecurityOrganization',
        component: () => import('@/views/SecurityGovernance/SecurityOrganization'),
        name: 'SecurityOrganization',
        meta: { title: '安全组织' },
      } ,
      {
        path: 'SecurityWen',
        component: () => import('@/views/SecurityGovernance/SecurityWen'),
        name: 'SecurityWen',
        meta: { title: '安全文化' },
      } ,
      {
        path: 'SecurityManagement',
        component: () => import('@/views/SecurityGovernance/SecurityManagement'),
        name: 'SecurityManagement',
        meta: { title: '安全管理' },
      } ,
      {
        path: 'SafetyCertification',
        component: () => import('@/views/SecurityGovernance/SafetyCertification'),
        name: 'SafetyCertification',
        meta: { title: '安全认证' },
      } ,
    ]
  },

]
// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
