<template>
    <div class="footer">
      <ul class="socialMedia">
        <li><a href="https://www.facebook.com/noah.shorter"><img src="../assets/social-1_square-facebook_orange.svg"/></a></li>
        <li><a href="https://www.linkedin.com/in/noah-shorter-6830201b6"><img src="../assets/social-1_square-linkedin_orange.svg"/></a></li>
        <li><a href="https://www.github.com/NoahShorter"><img src="../assets/social-1_square-github_orange.svg"/></a></li>
        <li><a href="mailto: shorter.noah@gmail.com"><img src="../assets/social-1_square-google-plus_orange.svg"/></a></li>
      </ul>
      <ul class="routerMap">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li> | </li>
        <li><router-link class="link" to="/Projects">Projects</router-link></li>
        <li> | </li>
        <li><router-link class="link" to="/Contact">Contact</router-link></li>
      </ul>
    </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
}

.footer {
  flex-shrink: 0;
  /* background: rgb(36,31,54);
  background: linear-gradient(83deg, rgba(36,31,54,1) 0%, rgba(29,24,46,1) 65%); */
  background-color: #223843;
  color: #EFF1F3;
}

.socialMedia {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 10px;
}

.socialMedia li {
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
}

.socialMedia img{
  width: 32px;
  height: 32px;
  color: rgb(255,136,1);
  color: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(252,192,69,1) 100%);
}

.routerMap {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
}

.routerMap li{
  display: inline;
}

.link {
  color: #EFF1F3;
}

.link:hover {
  color: #EFF1F3;
}

</style>