// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//  导入路由模块
import router from './router'
import login from './components/Login'
import appRouter from './components/AppRouter'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#app-router',
  data: {
  },
  methods: {
  },
  components: {
    appRouter
  },
  template: '<appRouter/>',
  // render: c => c(appRouter),
  router
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
