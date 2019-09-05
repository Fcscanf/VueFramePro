// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import login from './components/Login'
import appRouter from './components/AppRouter'
//  引入VueRouter
import VueRouter from 'vue-router'
import account from './components/Account'
import goodList from './components/GoodsList'

//  安装VueRouter
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var routerApp = new VueRouter({
  routes: [
    {path: '/account', component: account},
    {path: '/goodlist', component: goodList}
  ]
})

new Vue({
  el: '#app-router',
  data: {
  },
  methods: {
  },
  components: {
  },
  render: c => c(appRouter),
  router: routerApp
})

new Vue({
  el: '#app-one',
  data: {
    username: 'Fcant'
  },
  methods: {
  },
  render: c => c(login)
})
