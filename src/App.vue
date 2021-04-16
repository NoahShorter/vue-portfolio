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

.home {
  background-image: url('./assets/tallwhitemountain.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-evenly;
  font-family: 'Open Sans', sans-serif;
  /*color: white;*/
  /*background-color: #100e17;*/
}

body {
    background-color: #f5f5f5 !important;
    color: black !important; 
    padding-top: 60px;
    height: 100%;
}

.data {
  padding-left: 70px;
  padding-right: 70px;
  height: 100%;
}

.wrapper {
  flex: 1 0 auto;
}
</style>
