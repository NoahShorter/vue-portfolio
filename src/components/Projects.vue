<template>
    <div class="Projects">
        <h2>Software Projects</h2>
        <div class="break"/>
        <divider :red=34 :green=56 :blue=67 />
        <div class="break"/>
        <Project Img="EZgit logo 3.png" title="EZ git" info="EZ git is an extremely easy to use UI for the source control software git."/>
        <Project Img="BRFinder.jpg" title="BRFinder" info="BRFinder is a mobile application that allows users to track, add, and rate public bathrooms."/>
    </div>
</template>

<script>
import Project from './Project.vue'
import divider from './Divider.vue'

export default {
  name: 'Projects',
  components: {
    Project,
    divider
  },
  created () {
    document.title = 'Noah Shorter - Projects'
  }
}
</script>
<style scoped>
.Projects{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
}

.Projects h2 {
  font-weight: 700;
}

.break {
    flex-basis: 100%;
    height: 0;
}

</style>