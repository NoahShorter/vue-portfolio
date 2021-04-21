<template>
    <div class="Contact">
        <h2>CONTACT ME</h2>
        <divider :red=34 :green=56 :blue=67 />
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <p><label>Name *</label><input required name="Name" type="text"/></p>
          <p><label>Email Address *</label><input required name="Email" type="email"/></p>
          <p><label>Message</label><textarea name="Message"/></p>
          <p><button type="submit" class="subButton">Send</button></p>
        </form>
        <!-- <div class="digits"><h4 class="labels">Email</h4><p>shorter.noah@gmail.com</p></div>
        <div class="digits"><h4 class="labels">Phone Number</h4><p>541-561-8278</p></div> -->
    </div>
</template>

<script>
import divider from "./Divider.vue"

export default {
  name: 'Contact',
  components: {
    divider
  },
  created () {
    document.title = 'Noah Shorter - Contact'
  }
}
</script>

<style scoped>
.Contact {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.Contact h2 {
  font-weight: 700;
}

.Contact input, textarea {
  width: 100%;
}

.Contact label {
  width: 100%;
  text-align: left;
}

.Contact .subButton {
  background: rgb(255,136,1);
  background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(252,192,69,1) 100%);
  border: none;
  width: 100px;
  height: 40px;
  margin-right: calc(100% - 100px);
  font-weight: 700;
  border-radius: 2px;
}

h4 {
  font-weight: 700;
  color: rgb(58,124,165);
}

.digits {
  margin: auto;
}

</style>