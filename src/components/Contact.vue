<template>
    <div class="Contact">
        <h2>CONTACT ME</h2>
        <div class="separator">/ /</div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <p><label>Name *</label><input required name="Name" type="text"/></p>
          <p><label>Email Address *</label><input required name="Email" type="email"/></p>
          <p><label>Message</label><textarea name="Message"/></p>
          <p><button type="submit">Send</button></p>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Contact',
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
}

input, textarea {
  width: 100%;
}

label {
  width: 100%;
  text-align: left;
}

button {
  background: rgb(255,136,1);
  background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(252,192,69,1) 100%);
  border: none;
  width: 100px;
  height: 40px;
  justify-self: left;
  margin-right: 100%;
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