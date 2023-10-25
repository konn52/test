import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/HelloWorld'
import introduction from '@/components/IntroDuction'
import language from '@/components/UselanguageSelect'
import intern from '@/components/InTern'
import portfolio from '@/components/JIkoSyokai'

// import Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/IntroDuction',
      component: introduction
    },
    {
      path: '/UselanguageSelect',
      component: language
    },
    {
      path: '/InTern',
      component: intern
    },
    {
      path: '/JIkoSyokai',
      component: portfolio
    }
  ]
})
