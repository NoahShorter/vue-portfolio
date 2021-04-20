<template>
    <div class="introTop">
        <div class="topPic">
            <div class="introCard">
              <h1 class="name">I'm Noah Shorter</h1>
              <divider :red=239 :green=241 :blue=243 />
              <p class="description">
              Software Engineer <br>Developer <br>All around great guy
              </p>
            </div>
            <img class="headshot" src="../assets/headshot.jpg">
        </div>
    </div>
</template>

<script>
import divider from "./Divider.vue"

export default {
    name: "IntroTop",
    components: {
      divider
    }
}
</script>


<style scoped>
.introTop {
  background-image: url("../assets/treesandbirds.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  width: 100%;
}

.topPic {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10%;
}

.introCard {
  background-color: rgba(34, 56, 67, .9);
  color: #EFF1F3;
  border-radius: 20px;
  padding: 20px;
  max-width: 500px;
  height: 100%;
  font-size: 20px;
}

.name {
  font-family: 'Playfair Display SC', serif;
}

.headshot {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px;
}
</style>