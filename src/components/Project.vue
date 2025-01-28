<template>
  <div class="project-whole card"> 
    <img class="image-fit card-img-top" :src="getImageUrl(Img)" alt="image"/>
    <div class="card-body">
      <h5 class="card-title">{{props.title}}</h5>
      <p class="info card-text">{{props.info}}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps([ 'Img', 'title', 'info'])
function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>
<style scoped>

.project-whole {
    height: fit-content;
    width: 410px;
    background: white;
    float: left;
    margin: 10px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.096);
    overflow: hidden;
}



.card img {
  -webkit-transition:all .5s ease; 
  -moz-transition:all .5s ease; 
  -o-transition:all .5s ease;
  -ms-transition:all .5s ease; 
}

.card:hover img {
  -webkit-transform:scale(1.15);
  -moz-transform:scale(1.15);
  -ms-transform:scale(1.15);
  -o-transform:scale(1.15);
  transform:scale(1.15);
}

.image-fit{
  height: 250px;
  width: 100%;
  object-fit:contain;
}

.info{
    margin: 0;
    padding: 5px;
}

</style>