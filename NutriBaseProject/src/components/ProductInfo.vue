<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { tests } from "../data/ProductData.js";
import { useFavorites } from "../data/Favorites.js";

const route = useRoute();
const abc = computed(() =>
    tests.find((product) => String(product.id) === String(route.params.id))
);

const { isLiked, toggleFavorite } = useFavorites();
</script>

<template>
  <main>
    <div v-if="abc" class="info__container">
      <h1>{{ abc.title }}</h1>
      <p>Lorem ipsum</p>
      <p>id = {{ abc.id }}</p>
      <img :src="abc.image" alt="" />

      <button type="button" @click="toggleFavorite(abc.id)">
        {{ isLiked(abc.id) ? "Heart" : "No Heart" }}
      </button>
    </div>

    <div v-else class="info__container">
      Product not found
    </div>
  </main>
</template>

<style scoped>
.info__container {
  margin: 5rem 15rem;
  border: 2px black solid;
  padding: 2rem;
}
</style>