<template>
    <div class="Projects">
        <h2>Software Projects</h2>
        <div class="break"/>
        <div class="separator">/ /</div>
        <div class="break"/>
        <Project Img="EZgit logo 3.png" title="EZ git" info="EZ git is an extremely easy to use UI for the source control software git."/>
        <Project Img="BRFinder.jpg" title="BRFinder" info="BRFinder is a mobile application that allows users to track, add, and rate public bathrooms."/>
    </div>
</template>

<script>
import Project from './Project.vue'

export default {
  name: 'Projects',
  components: {
    Project
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
}
.break {
    flex-basis: 100%;
    height: 0;
}
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
}

.separator::before {
  height: 1px;
  width: 100%;
  content: '';
  flex: 1;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.separator::after {
  height: 1px;
  width: 100%;
  content: '';
  flex: 1;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}
</style>