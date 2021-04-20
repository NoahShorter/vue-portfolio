<template>
  <div class="Interests-whole">
    <h1 class="title">Interests</h1>
    <div class="interests">
      <div class="interestcard">
        <div class="card-body">
          <h1>Aerospace/<br>Rocketry</h1>
        </div>
        <img class="img-card-bottom image" src="../assets/Aerospace.png">
      </div>

      <div class="interestcard">
        <div class="card-body">
          <h1>Robotics</h1>
        </div>
        <img class="img-card-bottom image" src="../assets/Robotics.png">
      </div>
      
      <div class="interestcard">
        <div class="card-body">
          <h1>Web/Mobile <br>Dev</h1>
        </div>
        <img class="img-card-bottom image" src="../assets/development.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
.Interests-whole {
  background-color: #EFF1F3;
  color: #223843;
  width: 100%;
  padding: 20px;
}

.title {
  margin: 0;
  margin-top: 5px;
  font-weight: 700;
}

.interests {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  padding: 20px;
  padding-top: 0;
}

.image {
  background-color: #223843;
  border-radius: 50%;
  padding: 25px;
}
</style>