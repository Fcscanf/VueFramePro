<script>
export default {
  name: 'AppRouter'
}
</script>

<template>
  <div>
    <h1>AppRouter</h1>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodlist">GoodList</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
