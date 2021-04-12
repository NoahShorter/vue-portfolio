<template>
    <div class="Contact">
        <h1>This is the Contact page</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <p><input required name="Name" type="text" placeholder="Name"/></p>
          <p><input required name="Email" type="email" placeholder="Email"/></p>
          <p><textarea name="Message" placeholder="Message"/></p>
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