<script>
import { Toast } from 'mint-ui'

export default {
  name: 'Account',
  data () {
    return {
      toastInstanse: null
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.show()
      setTimeout(() => {
        this.toastInstanse.close()
      }, 3000)
    },
    show () {
      this.toastInstanse = Toast({
        message: '提示信息',
        duration: -1,
        position: 'top',
        iconClass: 'glyphicon glyphicon-search',
        // 为图标引用自定义样式
        className: 'appToast'
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <h1>用户管理</h1>
    <mt-button type="primary" @click="show">primary</mt-button>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/reg">注册</router-link>
    <router-view></router-view>
  </div>
</template>
