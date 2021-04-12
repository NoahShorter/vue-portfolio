<template>
    <div class="Contact">
        <h1>This is the Contact page</h1>
        <form name="contact" method="POST" netlify>
          <input required name="Name" type="text" placeholder="Name"/>
          <input required name="Email" type="email" placeholder="Email"/>
          <textarea name="Message" placeholder="Message"/>
          <button type="submit">Send</button>
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