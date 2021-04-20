<template>
    <div class="separator" :style="cssVars">/ /</div>
</template>

<script>

export default {
    name: "Divider",
    props: {
        red: Number,
        green: Number,
        blue: Number,
    },
    computed: {
        cssVars () {
            return{
                '--red': this.red,
                '--green': this.green,
                '--blue': this.blue,
            }
        }
    }
}
</script>


<style scoped>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  user-select: none;
}

.separator::before {
  height: 1px;
  width: 100%;
  content: '';
  flex: 1;
  background-image: linear-gradient(to right, rgba(var(--red), var(--green), var(--blue), 0), rgba(var(--red), var(--green), var(--blue), 1));
}

.separator::after {
  height: 1px;
  width: 100%;
  content: '';
  flex: 1;
  background-image: linear-gradient(to left, rgba(var(--red), var(--green), var(--blue), 0), rgba(var(--red), var(--green), var(--blue), 1));
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}
</style>