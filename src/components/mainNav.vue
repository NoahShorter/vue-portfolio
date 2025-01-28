<template>
    <div class="mainNav">
        <!-- Top Menu Bar-->
        <nav class="navbar nav-main" ref="dropdownMenu">

            <!--Menu Button-->
            <button class="navbar-toggler menu-btn" id="menu-btn" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseNav"  @click="toggleClass()" ref="hamBtn">
                <div class="animated-icon2" v-bind:class="{ open: isOpen }"><span></span><span></span><span></span><span></span></div>
            </button>
            <!--End Menu Button-->

            <!--Logo-->
            <div class="logo">
                <router-link to="/"><h4>NS</h4></router-link>
            </div>
            <!--End Logo-->

            <!--Login Button-->
            <div class="spacer">
                <!-- <a class="login" href="#">
                    <button class="login-btn">
                        Login
                    </button>
                </a> -->
            </div>
            <!--End Login Button-->

            <!--Side Bar-->
            <div class="collapse navbar-collapse" id="collapseNav" ref="dropdown">
                <ul>
                    <li><router-link class="link" to="/">Home</router-link></li>
                    <li><router-link class="link" to="/Projects">Projects</router-link></li>
                    <li><router-link class="link" to="/Contact">Contact</router-link></li>
                </ul>
            </div>

        </nav>
        <!--End Top Menu Bar -->

    </div>
</template>

<script>
export default {
  name: 'mainNav',
  data() {
      return {
          isOpen: false   
      }
  },
  methods: {
      toggleClass: function(){
          console.log('opened')
          this.isOpen = !this.isOpen;
      },
      documentClick(e){
        let el = this.$refs.dropdownMenu
        let okClick = this.$refs.dropdown
        let target = e.target
        var elem = this.$refs.hamBtn;
        if ( (el !== target) && !el.contains(target) && this.isOpen) {
            elem.click();
        }
        else if (((okClick === target) || okClick.contains(target)) && this.isOpen){
            elem.click();
        }
      }
  },
  computed: {

  },
  created () {
      document.addEventListener('click', this.documentClick)
  },
  destroyed () {
    // important to clean up!!
    document.removeEventListener('click', this.documentClick)
  }
}
</script>

<style scoped>
@font-face {
    src: url("../fonts/LexendZetta-Regular.ttf");
    font-family: LexendZetta;
}

*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    z-index: 1;
}

.link {
    display: block;
    width: 100%;
    height: 100%;
    padding: 7px;
    padding-left: 15px;
}

#collapseNav {
    text-align: left;
}

#collapseNav ul{
    margin-top: 10px;
}

#collapseNav a{
    text-emphasis-style: none;
    text-decoration: none;
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
}

#collapseNav li:hover{
    background-color: rgba(255,255,255,0.3);
}

#collapseNav li:active{
    background-color: rgba(255,255,255,0.2);
}

.spacer {
    width: 52px;
}

.login-btn {
    background: rgb(255,136,1);
    background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(252,192,69,1) 100%);
    padding: 5px 21px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
}

.login-btn:hover {
    background: rgb(255,136,0.8);
    background: linear-gradient(90deg, rgba(255,136,0,0.8) 0%, rgba(252,192,69,0.8) 100%);
}

.login-btn:active {
    border: none;
    background: rgb(255,136,0.6);
    background: linear-gradient(90deg, rgba(255,136,0,0.6) 0%, rgba(252,192,69,0.6) 100%);
}

.login-btn:focus {
    outline: none;
}

.nav-main {
    width: 100%;
    padding: 5px 5px;
    min-height: 60px;
    /* background: rgb(36,31,54);
    background: linear-gradient(83deg, rgba(36,31,54,1) 0%, rgba(29,24,46,1) 65%); */
    background-color: #223843;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
}

.menu-btn {
    padding: 10px;
    border-radius: 10px;
    margin-left: 0;
    height: 100%;
    background: none;
}

.logo h4{
    color: #fff;
    font-family: LexendZetta;
    font-size: 40px;
    user-select: none;
}

.logo a {
    text-decoration: none;
}

.login {
    margin-right: 1em;
}

/* Icon 1 */

.animated-icon2 {
width: 30px;
height: 20px;
position: relative;
margin: 0px;
-webkit-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
cursor: pointer;
}

.animated-icon2 span {
display: block;
position: absolute;
height: 3px;
width: 100%;
border-radius: 9px;
opacity: 1;
left: 0;
-webkit-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
-webkit-transition: .25s ease-in-out;
-moz-transition: .25s ease-in-out;
-o-transition: .25s ease-in-out;
transition: .25s ease-in-out;
}

.animated-icon2 span {
background: rgb(255,136,1);
    background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(252,192,69,1) 100%);
}

/* Icon 3*/

.animated-icon2 span:nth-child(1) {
top: 0px;
}

.animated-icon2 span:nth-child(2), .animated-icon2 span:nth-child(3) {
top: 10px;
}

.animated-icon2 span:nth-child(4) {
top: 20px;
}

.animated-icon2.open span:nth-child(1) {
top: 11px;
width: 0%;
left: 50%;
}

.animated-icon2.open span:nth-child(2) {
-webkit-transform: rotate(45deg);
-moz-transform: rotate(45deg);
-o-transform: rotate(45deg);
transform: rotate(45deg);
}

.animated-icon2.open span:nth-child(3) {
-webkit-transform: rotate(-45deg);
-moz-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
transform: rotate(-45deg);
}

.animated-icon2.open span:nth-child(4) {
top: 11px;
width: 0%;
left: 50%;
}

</style>