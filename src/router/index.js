import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Test from '@/views/Test'
import MatchReports from '@/views/MatchReports'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path:'/result',
      name:'MatchReports',
      component:MatchReports
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    }
  ]
})
