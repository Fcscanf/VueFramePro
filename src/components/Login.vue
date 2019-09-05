<script>
//  export default
//  export default向外暴露的成员，可以使用任意的变量来接收
//  在一个模块中，export default只允许向外暴露一次
//  在一个模块中，可以同时使用export default和export向外暴露的成员

//  使用export default向外暴露的成员只能使用{}的形式来接收，这种形式叫做按需导出
//  使用export 可以向外暴露多个成员，同时如果某些成员，在import的时候不需要，则可以不在{}中定义
//  使用export 导出的成员，必须严格按照导出的时候的名称使用{}来接收
//  使用export 导出的成员，可以使用as来取别名

//  在Node中，使用var 名称 = require('模块标识符')
//  module.exports 和 exports 来暴露成员
export default {
  name: 'login',
  //  组件中的data必须是function
  data () {
    return {
      msg: 'Fcant'
    }
  },
  methods: {
    show () {
      console.log('SHOW')
    }
  }
}
</script>

<template>
    <h1>登录{{msg}}</h1>
</template>

<style scoped>
  h1{
    color: red;
  }
</style>
