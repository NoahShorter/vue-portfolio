<template>
    <div class="footer">
      <ul class="socialMedia">
        <li><a href="https://www.facebook.com/noah.shorter"><i class="bi-facebook icon"></i></a></li>
        <li><a href="https://www.linkedin.com/in/noah-shorter-6830201b6"><i class="bi-linkedin icon"></i></a></li>
        <li><a href="https://www.github.com/NoahShorter"><i class="bi-github icon"></i></a></li>
        <li><a href="mailto: shorter.noah@gmail.com"><i class="bi-envelope-arrow-up-fill icon"></i></a></li>
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


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.footer {
  /* flex-shrink: 0; */
  padding-top: 10px;
  padding-bottom: 21px;
  /* background: rgb(36,31,54);
  background: linear-gradient(83deg, rgba(36,31,54,1) 0%, rgba(29,24,46,1) 65%); */
  background-color: #223843;
  color: #EFF1F3;
}

.socialMedia {
  margin-bottom: 0;
}

.socialMedia li {
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
}

.icon {
  color: rgb(255,136,1);
  font-size: 1.75rem;
  margin: 0;
  padding: 0;
}

.routerMap {
  margin-top: 10px;
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