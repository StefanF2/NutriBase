<script setup>
import { ref, computed } from 'vue';
import { tests } from '../data/ProductData.js';
import { useFavorites } from '../data/Favorites.js';
import Result from "./Result.vue";

const message = ref('');
const isFilterOpen = ref(false);
const openDropdown = ref(null);
const searchedbar = ref(false);

const { liked } = useFavorites();

const searchTerm = ref('');

const favoriteItems = computed(() =>
    tests.filter((product) => liked.value.includes(product.id))
);

const filteredProducts = computed(() => {
  const search = searchTerm.value.trim().toLowerCase();
  return favoriteItems.value.filter((p) => p.title.toLowerCase().includes(search));
});

function showResults() {
  searchedbar.value = true;
}

function search() {
  searchTerm.value = message.value;
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
          @keyup.enter="search(), showResults()"
      />
      <button class="input-button" type="button" aria-label="Search" @click="search()">
        <!--<img src="searchbar_icon.png">-->
      </button>

      <div class="filter-wrapper">
        <div class="filter" @click="toggleFilter()">filter</div>

        <div v-if="isFilterOpen" class="filter-dropdown">
          <div class="filter-item">
            <div class="filter-option" @click="toggleDropdown('dietarytype')">Dietary Type</div>
            <div v-if="openDropdown === 'dietarytype'" class="sub-dropdown">
              <div></div>
            </div>
          </div>

          <div class="filter-item">
            <div class="filter-option" @click="toggleDropdown('price')">Price</div>
            <div v-if="openDropdown === 'price'" class="sub-dropdown">
              <div></div>
            </div>
          </div>

          <div class="filter-item">
            <div class="filter-option" @click="toggleDropdown('dietaryfeatures')">Dietary Features</div>
            <div v-if="openDropdown === 'dietaryfeatures'" class="sub-dropdown">
              <div></div>
            </div>
          </div>

          <div class="filter-item">
            <div class="filter-option" @click="toggleDropdown('rating')">Rating</div>
            <div v-if="openDropdown === 'rating'" class="sub-dropdown">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ul class="products" v-show="searchedbar">
    <h2 id="result__header" >Best results: </h2>
    <div class="result__grid">
      <Result
          v-for="item in filteredProducts"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :id="item.id"
      />
    </div>
    <li v-if="filteredProducts.length === 0" class="no-results">
      No favorites found
    </li>
  </ul>
</template>

<style scoped>
div::-webkit-scrollbar {
  display: none;
}
div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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

.logo {
  width: 100%;
  max-width: 100%;
  position: fixed;
  z-index: -100;
  overflow: hidden;
  opacity: 0.3;
}

.input {
  position: relative;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
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
  font-size: 20px;
  height: 46px;
  width: 60px;
  border: 1.5px solid black;
  border-radius: 50px;
  background-color: white;
}
.input-button:hover,
.filter:hover,
.filter-option:hover {
  cursor: pointer;
}
.filter-wrapper {
  position: absolute;
  right: 5vw;
  top: 5px;
  width: 150px;
  z-index: 101;
}
.filter {
  border: 2px solid black;
  border-radius: 50px;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.filter-dropdown {
  position: absolute;
  top: 23px;
  right: 0;
  border: 2px solid black;
  border-radius: 0 0 25px 25px;
  width: 150px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: white;
  z-index: -1;
}
.filter-item {
  position: relative;
  width: 150px;
  text-align: center;
}
.filter-option {
  width: 150px;
  text-align: center;
}
.sub-dropdown {
  position: absolute;
  top: 0;
  right: 100%;
  margin-right: 12px;
  width: 200px;
  height: 200px;
  max-width: calc(100vw - 10vw - 170px);
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  z-index: 99;
}

.products {
  margin: 0 15rem;
}
.product-card {
  height: 250px;
  border: 2px solid black;
  width: 200px;
  border-radius: 1rem;
  padding: 10px;
  margin: 10px;
  background-color: white;
  list-style-type: none;
  overflow: hidden;
}
.product-card:hover {
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: translate(3px, -3px);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.background-img {
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  z-index: 0;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
.item-name {
  z-index: 1;
  display: flex;
  justify-content: center;
  top: -70px;
  position: relative;
  word-break: break-word;
  font-size: 40px;
  font-family: "Century Gothic", serif;
  font-weight: bold;
  text-shadow: 0 0.2vw 0.4vw rgba(255, 255, 255, 0.8);
}
.no-results {
  list-style-type: none;
  font-family: "Century Gothic", sans-serif;
  font-size: 24px;
  margin: 40px 10px;
}
.result__grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  color: white;
}
#result__header{
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