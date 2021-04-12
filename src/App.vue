<template>
  <div id="app">
    <mainNav/>
    <router-view class="data"/>
  </div>
</template>

<script>
import mainNav from './components/mainNav.vue'

export default {
  name: 'App',
  components: {
    mainNav
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: white;*/
  /*background-color: #100e17;*/
}

body {
    background-color: #f5f5f5 !important;
    color: black !important; 
    padding-top: 65px;
}

.data {
  padding-left: 70px;
  padding-right: 70px;
}
</style>
