<script setup>
import { ref, computed } from 'vue';
import { tests } from '../data/ProductData.js';
import { useFavorites } from '../data/Favorites.js';
import Result from "./Result.vue";

const message = ref('');
const isFilterOpen = ref(false);
const openDropdown = ref(null);
const searchedbar = ref(false);
const searchTerm = ref('');

const filterOptions = [
  { key: 'dietarytype', label: 'Dietary Type' },
  { key: 'price', label: 'Price' },
  { key: 'dietaryfeatures', label: 'Dietary Features' },
  { key: 'rating', label: 'Rating' },
];

const { liked } = useFavorites();

const favoriteItems = computed(() =>
    tests.filter((product) => liked.value.includes(product.id))
);

const filteredProducts = computed(() => {
  const search = searchTerm.value.trim().toLowerCase();
  return favoriteItems.value.filter((p) =>
      p.title.toLowerCase().includes(search)
  );
});

function search() {
  searchTerm.value = message.value;
  searchedbar.value = true;
}

function toggleFilter() {
  isFilterOpen.value = !isFilterOpen.value;
  openDropdown.value = null;
}

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name;
}
</script>

<template>
  <div class="background"><img class="logo" src="../assets/Logo.jpg" alt="" /></div>

  <div class="text">
    <h1 class="title">Favorites</h1>
    <h2 class="undertitle">your favorite products for quick access</h2>

    <div class="input">
      <input
          class="input-field"
          v-model="message"
          type="text"
          placeholder="favorites..."
          @keyup.enter="search"
      />
      <button class="input-button" type="button" aria-label="Search" @click="search">
        <!--<img src="searchbar_icon.png">-->
      </button>

      <div class="filter-wrapper">
        <button
            class="filter"
            :class="{ active: isFilterOpen }"
            type="button"
            @click="toggleFilter"
        >
          <svg class="filter-icon" viewBox="0 0 24 24" width="18" height="18" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 5h18l-7 8v6l-4 2v-8L3 5z" />
          </svg>
          <span>Filter</span>
          <svg class="chevron" viewBox="0 0 24 24" width="16" height="16" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <Transition name="pop">
          <div v-if="isFilterOpen" class="filter-dropdown">
            <div v-for="opt in filterOptions" :key="opt.key" class="filter-item">
              <button
                  class="filter-option"
                  :class="{ active: openDropdown === opt.key }"
                  type="button"
                  @click="toggleDropdown(opt.key)"
              >
                <svg class="option-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none"
                     stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
                <span>{{ opt.label }}</span>
              </button>

              <Transition name="pop">
                <div v-if="openDropdown === opt.key" class="sub-dropdown"></div>
              </Transition>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>

  <section class="products" v-show="searchedbar">
    <h2 id="result__header">Best results:</h2>
    <div class="result__grid">
      <Result
          v-for="item in filteredProducts"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :id="item.id"
      />
    </div>
    <div v-if="filteredProducts.length === 0" class="no-results">
      No favorites found
    </div>
  </section>
</template>

<style scoped>
.text {
  font-family: "Century Gothic", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  padding-top: 50px;
  font-size: 70px;
}

.undertitle {
  padding-top: 40px;
}

.background {
  position: fixed;
  inset: 0;
  z-index: -100;
  overflow: hidden;
}

.logo {
  width: 100%;
  max-width: 100%;
  opacity: 0.3;
}

.input {
  position: relative;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-field {
  font-size: 28px;
  padding-left: 10px;
  height: 50px;
  width: 30vw;
  min-width: 200px;
  max-width: calc(100vw - 60px);
  border: 2px solid black;
  border-radius: 50px;
  font-family: "Century Gothic", sans-serif;
}

.input-button {
  position: relative;
  right: 62px;
  margin-right: -60px;
  height: 46px;
  width: 60px;
  border: 1.5px solid black;
  border-radius: 50px;
  background-color: white;
}

.input-button:hover {
  cursor: pointer;
}

/* ---------- Filter ---------- */
.filter-wrapper {
  position: absolute;
  right: 5vw;
  top: 5px;
  z-index: 101;
}

.filter {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 0 18px;
  border: 2px solid black;
  border-radius: 50px;
  background-color: white;
  color: black;
  font-family: "Century Gothic", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.filter:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.filter.active {
  background-color: black;
  color: white;
}

.chevron {
  transition: transform 0.25s ease;
}

.filter.active .chevron {
  transform: rotate(180deg);
}

.filter-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 200px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: white;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.filter-item {
  position: relative;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: black;
  font-family: "Century Gothic", sans-serif;
  font-size: 15px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.filter-option:hover {
  background-color: rgba(0, 0, 0, 0.07);
}

.filter-option.active {
  background-color: black;
  color: white;
}

.option-arrow {
  opacity: 0.5;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.filter-option.active .option-arrow {
  opacity: 1;
  transform: translateX(-2px);
}

.sub-dropdown {
  position: absolute;
  top: 0;
  right: calc(100% + 18px);
  width: 220px;
  min-height: 160px;
  padding: 14px;
  background-color: white;
  border: 2px solid black;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 99;
}

/* Animation */
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.97);
}

/* ---------- Ergebnisse ---------- */
.products {
  margin: 40px 15rem 0;
  text-align: center;
}

.no-results {
  font-family: "Century Gothic", sans-serif;
  font-size: 24px;
  margin: 40px 10px;
}

.result__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

#result__header {
  font-size: 2rem;
  font-family: "Century Gothic", Helvetica, sans-serif;
  padding-bottom: 1rem;
}
</style>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
}

html,
body,
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar,
*::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
</style>