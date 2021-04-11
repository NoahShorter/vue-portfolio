<template>
  <div class="project-whole"> 
    <img class="image-fit" :src="require(`@/assets/${Img}`)" alt="image"/>
    <p class="info">{{info}}</p>
  </div>
</template>
<script>
  export default {
    name: "Project",
    props: [ 'Img', 'info'],
  }
</script>
<style scoped>

.project-whole {
    border: 3px solid;
    border-color: rgb(36,31,54);
    height: fit-content;
    width: 410px;
    background: gray;
    float: left;
    margin: 10px;
}

.image-fit{
  height: 250px;
  width: 400px;
  object-fit: cover;
}

.info{
    background: rgb(36,31,54);
    background: linear-gradient(83deg, rgba(36,31,54,1) 0%, rgba(29,24,46,1) 65%);
    margin: 0;
    padding: 5px;
    border-top: 3px solid;
    border-color: rgb(36,31,54);
}

</style>