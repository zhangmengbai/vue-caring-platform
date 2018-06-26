import Vue from 'vue'
import Router from 'vue-router'
import login from 'components/login/login'
import home from 'components/home/home'
import systemManagement from  'components/system-management/system-management'
import apiManagement from  'components/api-management/api-management'
import logManagement from  'components/log-management/log-management'
import personnelManagement from  'components/personnel-management/personnel-management'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/system-management',
      children: [
        {
          path:'system-management',
          name: 'system-management',
          component: systemManagement,
        },
        {
          path:'api-management',
          name: 'api-management',
          component: apiManagement,
        },
        {
          path:'log-management',
          name: 'log-management',
          component: logManagement,
        },
        {
          path:'personnel-management',
          name: 'personnel-management',
          component: personnelManagement,
        }
      ]
    }
  ]
})
