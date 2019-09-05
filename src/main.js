// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//  导入路由模块
import router from './router'
import login from './components/Login'
import appRouter from './components/AppRouter'

// 导入Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// 导入自定义CSS样式
import './css/app.css'

// 导入MintUI的所有组件
// 导入Mint-UI
import MintUI from 'mint-ui'
// 此处引入时可以省去 node_moudles 这一层目录
import 'mint-ui/lib/style.css'
// 将MintUI注册到Vue
Vue.use(MintUI)

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
