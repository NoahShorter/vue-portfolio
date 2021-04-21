<template>
  <div id="app">
    <mainNav/>
    <div class="wrapper">
      <router-view class="data" :class="{'negPad' : isHome}"/>
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
  },
  data() {
    return{
      isHome: true
    }
  },
  watch: {
    '$route' () {
      if(this.$route.path === '/'){
        this.isHome = true;
      }
      else {
        this.isHome = false;
      }
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}

.home {
  /* background-image: url('./assets/tallwhitemountain.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
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
    background-color: #EFF1F3 !important;
    color: #223843 !important; 
    padding-top: 60px;
    height: 100%;
}

.data {
  padding-left: 70px;
  padding-right: 70px;
  height: 100%;
}

.negPad {
  padding-left: 0;
  padding-right: 0;
}

.wrapper {
  flex: 1 0 auto;
}
</style>
