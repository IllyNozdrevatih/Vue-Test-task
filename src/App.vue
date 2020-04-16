<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
import router from './router'

export default {
  router,
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
