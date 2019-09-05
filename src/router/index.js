import Vue from 'vue'
//  引入VueRouter
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import account from '../components/Account'
import goodList from '../components/GoodsList'
import login from '../components/Login'
import reg from '../components/Reg'
//  安装VueRouter
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/account',
      component: account,
      children: [
        {path: 'login', component: login},
        {path: 'reg', component: reg}
      ]
    },
    {path: '/goodlist', component: goodList}
  ]
})
