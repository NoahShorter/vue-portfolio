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
  color: white;
  background-color: #100e17;
}

body {
    background-color: #100e17 !important;
    color: white !important; 
    padding-top: 65px;
}

.data {
  padding-left: 100px;
  padding-right: 100px;
}
</style>
