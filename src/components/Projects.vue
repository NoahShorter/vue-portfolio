<template>
    <div class="Projects">
        <h1>This is the Projects page</h1>
        <div class="break"/>
        <Project Img="EZgit logo 3.png" info="EZ git is an extremely easy to use UI for the source control software git."/>
        <Project Img="BRFinder.jpg" info="BRFinder is a mobile application that allows users to track, add, and rate public bathrooms."/>
    </div>
</template>

<script>
import Project from './Project.vue'

export default {
  name: 'Projects',
  components: {
    Project
  }
}
</script>
<style scoped>
.Projects{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.break {
    flex-basis: 100%;
    height: 0;
}
</style>