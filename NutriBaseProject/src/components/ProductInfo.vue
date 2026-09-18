<script setup>

const props = defineProps({
  id: Number,
  title: String,
  image: String,
});

</script>

<template>
  <main>
    <div class="info__container">
      {{props.id}}
      {{props.image}}
      {{props.title}}
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
.info__container {
  margin: 5rem 15rem;
  border: 2px black solid;
  padding: 2rem;
}
</style>