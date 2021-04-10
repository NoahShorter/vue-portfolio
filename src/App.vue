<template>
  <div id="app">
    <mainNav/>
    <router-view/>
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
}
</style>
