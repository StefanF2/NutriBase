<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useFavorites } from "../data/Favorites.js";

const route = useRoute();

const product = ref(null);
const loading = ref(true);
const error = ref(false);

const { isLiked, toggleFavorite } = useFavorites();

onMounted(async () => {
  try {
    const response = await fetch(
        `https://world.openfoodfacts.org/api/v2/product/${route.params.id}.json`
    );

    const data = await response.json();

    if (data.status === 1) {
      const p = data.product;

      product.value = {
        id: String(route.params.id),
        title: p.product_name || "Unbekanntes Produkt",
        image: p.image_front_url || "",
        brands: p.brands || "",
        quantity: p.quantity || "",
        nutrition_grades: p.nutrition_grades || ""
      };
    } else {
      error.value = true;
    }
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <div v-if="loading" class="info__container">
      Produkt wird geladen...
    </div>

    <div v-else-if="product" class="info__container">
      <h1>{{ product.title }}</h1>

      <p v-if="product.brands">{{ product.brands }}</p>
      <p v-if="product.quantity">{{ product.quantity }}</p>
      <p>id = {{ product.id }}</p>

      <img
          v-if="product.image"
          :src="product.image"
          :alt="product.title"
      />

      <p v-if="product.nutrition_grades">
        Nutri-Score: {{ product.nutrition_grades.toUpperCase() }}
      </p>

      <button type="button" @click="toggleFavorite(product.id)">
        {{ isLiked(product.id) ? "Heart" : "No Heart" }}
      </button>
    </div>

    <div v-else class="info__container">
      Produkt konnte nicht gefunden werden.
    </div>
  </main>
</template>

<style scoped>
.info__container {
  margin: 5rem 15rem;
  border: 2px black solid;
  padding: 2rem;
}

img {
  max-width: 250px;
  height: auto;
  display: block;
}
</style>