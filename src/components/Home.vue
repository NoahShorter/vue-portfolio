<template>
    <div class="Home">
        <h1 class="title">Welcome!</h1>
        <img src="../assets/headshot.jpg" class="headshot">
        <div class="introCard">
          <h1 class="name">I'm Noah Shorter</h1>
          <div class="separator">/ /</div>
          <p class="description">Software Engineer <br>Developer <br>All around great guy</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Home',
  created () {
    document.title = 'Noah Shorter - Home'
    document.body.className = 'home'
  },
  destroyed () {
    document.body.className = ''
  }
}
</script>
<style scoped>

.Home {
  /* background-image: url('../assets/mountains.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
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