<script setup>
const props = defineProps({
  title: String,
  image: String,
})
</script>

<template>
  <button class="results__item">
    <div class="results__image">
      <img :src="props.image" alt=""/>
    </div>
    <div class="results__title">
      {{ props.title }}
    </div>
  </button>
</template>

<style scoped>
.results__item {
  width: 100%;
  aspect-ratio: 1 / 1;

  border: 3px solid black;
  box-sizing: border-box;
  background-color: white;
  cursor:pointer;
  border-radius: 1rem;

  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
}
.results__image {
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.results__image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.results__title {
  font-size: 2.5rem;
  padding: 5px;
  font-family: "Century Gothic", Helvetica, sans-serif;
  font-weight: bold;
}

</style>