<template>
    <div class="Home">
        <!-- <h1 class="title">Welcome!</h1>
        <img src="../assets/headshot.jpg" class="headshot">
        <div class="introCard">
          <h1 class="name">I'm Noah Shorter</h1>
          <div class="separator">/ /</div>
          <p class="description">Software Engineer <br>Developer <br>All around great guy</p>
        </div> -->

      <IntroTop/>
      <Interests/>
      <aboutMe/>
    </div>
</template>
<script setup>
import IntroTop from "./IntroTop.vue"
import Interests from "./Interests.vue"
//import divider from "./Divider.vue"
import aboutMe from "./AboutMe.vue"

console.log(import.meta.env.VITE_API_URL)

// export default {
//   name: 'Home',
//   components: {
//     IntroTop,
//     Interests,
//     aboutMe,
//   },
//   created () {
//     document.title = 'Noah Shorter - Home'
//     console.log(import.meta.env.VITE_API_URL)
//   }
// }
</script>
<style scoped>

/* .Home {
  background-image: url('../assets/mountains.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
}

.introCard {
  background-color: rgba(217, 217, 217, .6);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.name {
  font-family: 'Playfair Display SC', serif;
}

.description {
  margin: 0;
}

.headshot {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px;
} */

</style>