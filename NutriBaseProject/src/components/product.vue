<script setup>
  import navbar from './navbar.vue'

</script>

<template>
  <div>
    <nav>

    </nav>
  </div>
  <main>
    <input v-model="message" type="text" placeholder="favorites">
    <button @click="console.log(message)">Submit</button>
    <a href="product.vue">product</a>
  </main>

</template>
