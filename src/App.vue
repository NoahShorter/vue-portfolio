<template>
  <div id="app">
    <mainNav/>
    <div class="wrapper">
      <router-view class="data"/>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import mainNav from './components/mainNav.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    mainNav,
    MainFooter
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  /*color: white;*/
  /*background-color: #100e17;*/
}

body {
    background-color: #f5f5f5 !important;
    color: black !important; 
    padding-top: 65px;
}

.data {
  padding-left: 15%;
  padding-right: 15%;
  
}

.wrapper {
  flex: 1 0 auto;
}
</style>
