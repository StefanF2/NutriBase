<script setup>
import { ref } from "vue";
import Result from "./Result.vue";

const input = ref("");
const searchedbar = ref(false);
const loading = ref(false);
const products = ref([]);
const error = ref("");

// API-Suchlimit
const MAX_SEARCHES = 5;
const TIME_WINDOW = 60 * 1000;

const SEARCH_STORAGE_KEY = "off_search_timestamps";

// Gespeicherte Suchanfragen laden
function getSearchTimestamps() {
  try {
    const saved = JSON.parse(localStorage.getItem(SEARCH_STORAGE_KEY) || "[]");

    return Array.isArray(saved) ? saved.filter(time => Number.isFinite(time)) : [];
  } catch {
    return [];
  }
}

// Suchlimit überprüfen
function checkSearchLimit() {
  const now = Date.now();

  const timestamps = getSearchTimestamps().filter(
      time => now - time < TIME_WINDOW
  );

  if (timestamps.length >= MAX_SEARCHES) {
    const waitTime = Math.ceil(
        (timestamps[0] + TIME_WINDOW - now) / 1000
    );
    return {
      allowed: false,
      waitTime
    };
  }
  timestamps.push(now);

  localStorage.setItem(
      SEARCH_STORAGE_KEY,
      JSON.stringify(timestamps)
  );

  return {
    allowed: true
  };
}

// Produkte über Open Food Facts suchen
async function showResults() {
  // Keine parallelen Suchanfragen
  if (loading.value) return;

  const search = input.value.trim();

  if (!search) {
    products.value = [];
    searchedbar.value = false;
    error.value = "";
    return;
  }

  searchedbar.value = true;
  error.value = "";
  products.value = [];

  // Suchlimit überprüfen
  const limit = checkSearchLimit();

  if (!limit.allowed) {
    error.value =
        `Suchlimit erreicht! Bitte warte noch ${limit.waitTime} Sekunden.`;
    return;
  }

  loading.value = true;

  try {
    const params = new URLSearchParams({
      search_terms: search,
      search_simple: "1",
      action: "process",
      json: "1",
      page_size: "4",
      fields: "code,product_name,image_front_url,brands,quantity,nutrition_grades"
    });

    const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?${params}`,
        {
          headers: {
            "User-Agent": "Nutri-Base - WebApp - contact: Stefan_Filipov@sluz.ch"
          }
        }
    );

    if (!response.ok) {
      throw new Error("Fehler beim Laden der Produkte");
    }

    const data = await response.json();

    products.value = (data.products || [])
        .filter(product => product.code && product.product_name)
        .map(product => ({
          id: String(product.code),
          title: product.product_name,
          image: product.image_front_url || "",
          brands: product.brands || "",
          quantity: product.quantity || "",
          nutrition_grades: product.nutrition_grades || ""
        }));

  } catch (err) {
    console.error("Open Food Facts API:", err);

    error.value =
        "Die Produkte konnten nicht geladen werden. Bitte versuche es später erneut.";

  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main>
    <div class="home">
      <h1 id="home__header">Nutri-Base</h1>
      <h2 id="home__info">
        A Database to search for Product information
      </h2>
      <div class="home__search__container">
        <input id="home__searchbar" type="search" placeholder="Search..." v-model="input" @keyup.enter="showResults"/>
        <button id="home__button" type="button" @click="showResults" :disabled="loading" aria-label="Search">
          <img class="home__button" src="../assets/searchbar_icon.png" alt="Search"/>
        </button>
      </div>
    </div>

    <div class="result" v-show="searchedbar">
      <h2 id="result__header">
        Best results:
      </h2>
      <div v-if="loading" id="loading">
        Lade...
      </div>
      <div v-else-if="error" class="no-results">
        {{ error }}
      </div>
      <div v-else-if="products.length === 0" class="no-results">
        Keine Produkte gefunden.
      </div>
      <div v-else class="result__grid">
        <Result
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :id="product.id"
        />
      </div>
    </div>
  </main>

  <RouterView />
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem auto;
  gap: 3rem;
}

.home__search__container {
  position: relative;
  width: 45%;
}

#home__header {
  font-size: 6rem;
  font-family: "Century Gothic", Helvetica, sans-serif;
}

#home__info {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

#home__searchbar {
  width: 100%;
  height: 3.5rem;
  font-size: 1.5rem;
  border-radius: 2rem;
  border: 3px solid black;
  box-sizing: border-box;
  padding: 0 4rem 0 1.5rem;
}
.home__button {
  position: absolute;
  right: 1rem;
  top: 5%;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: transparent;
}
#home__button {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
}
#home__button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
#home__button .home__button {
  position: static;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.result {
  margin: 0 15rem;
}
.result__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  color: white;
}
#result__header {
  font-size: 2rem;
  font-family: "Century Gothic", Helvetica, sans-serif;
  padding-bottom: 1rem;
}
#loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "Century Gothic", Helvetica, sans-serif;
}
</style>