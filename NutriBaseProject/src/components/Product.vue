<script setup>
import { ref } from 'vue';

const message = ref('');
const isFilterOpen = ref(false);
const isRatingOpen = ref(false);
const isDietaryfeaturesOpen = ref(false);
const isPriceOpen = ref(false);
const isDietarytypeOpen = ref(false);
const breite = ref(window.innerWidth);

function toggleFilter() {
  isFilterOpen.value = !isFilterOpen.value;
  isRatingOpen.value = false;
  isDietaryfeaturesOpen.value = false;
  isDietarytypeOpen.value = false;
  isPriceOpen.value = false;
  const filterklasse = document.getElementById('filter');
  }
function toggleRating() {
  isRatingOpen.value = !isRatingOpen.value;
  isDietaryfeaturesOpen.value = false;
  isPriceOpen.value = false;
  isDietarytypeOpen.value = false;
  const ratingklasse = document.getElementById('rating');
}
function toggledietaryfeatures() {
  isDietaryfeaturesOpen.value = !isDietaryfeaturesOpen.value;
  isDietarytypeOpen.value = false;
  isPriceOpen.value = false;
  isRatingOpen.value = false;
  const dietaryfeaturesklasse = document.getElementById('dietaryfeatures');
}
function toggleprice() {
  isPriceOpen.value = !isPriceOpen.value;
  isDietaryfeaturesOpen.value = false;
  isDietarytypeOpen.value = false;
  isRatingOpen.value = false;
  const priceklasse = document.getElementById('price');
}
function toggledietarytype() {
  isDietarytypeOpen.value = !isDietarytypeOpen.value;
  isDietaryfeaturesOpen.value = false;
  isPriceOpen.value = false;
  isRatingOpen.value = false;
  const dietarytypeklasse = document.getElementById('dietarytype');
}


let test;
test = ['Apfel','Banane','Birne', 'kirsche', 'Wassermelone', 'Granatapfel'];
</script>

<template>
  <div class="background"><img class="logo" src="../assets/Logo.jpg"></div>
  <div class="text">
    <h1 class="title">
      Favorites
    </h1>
    <h2 class="undertitle">
      your favorite products for quick access
    </h2>
<div class="input">
  <input class="input-field" v-model="message" type="text" placeholder="favorites...">
  <button class="input-button" @click="console.log(message)"><!--<img src="searchbar_icon.png">--></button>
  <div class="filter" id="filter" @click="toggleFilter()">filter</div>
  <div v-if="isFilterOpen" class="filter-dropdown">
    <div class="dietarytype" id="dietarytype" @click="toggledietarytype()"> Dietary Type </div>
    <div class="price" id="price" @click="toggleprice()"> Price </div>
    <div class="dietaryfeatures" id="dietaryfeatures" @click="toggledietaryfeatures()"> Dietary Features </div>
    <div class="rating" id="rating" @click="toggleRating()"> Rating </div>
  </div>

    <div v-if="isFilterOpen && isRatingOpen" class="rating-dropdown">
      <div></div>
    </div>
  <div v-if="isFilterOpen && isDietaryfeaturesOpen" class="dietaryfeatures-dropdown">
    <div></div>
  </div>
  <div v-if="isFilterOpen && isPriceOpen" class="price-dropdown">
    <div></div>
  </div>
  <div v-if="isFilterOpen && isDietarytypeOpen" class="dietarytype-dropdown">
    <div></div>
  </div>
</div>

  </div>
  <div class="products">
    <li class="product-card" v-for="(item, index) in test" :key="index">
      <img class="background-img" src="../assets/Logo.jpg">
      <div class="item-name">{{ item }}</div>
      <p v-if="index * 200 >= breite"> </p>
    </li>
  </div>
</template>

<style scoped>
div::-webkit-scrollbar {
  display: none;
}
div{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.text{
  font-family: "Century Gothic";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input-field{
  font-size: 28px;
  padding-left: 10px;
  margin-left: 30px;
  height: 50px;
  width: 30vw;
  max-width: calc(100vw - 60px);
  border: 2px solid black;
  border-radius: 50px;
  font-family: "Century Gothic";
}
.input-button{
  position: relative;
  right: 62px;
  top: 11.5px;
  font-size: 20px;
  height: 46px;
  width: 60px;
  border: 1.5px solid black;
  border-radius: 50px;
  background-color: white;
}
.input{
  margin-top: 40px;
}
.input-button:hover, .filter:hover, .rating:hover, .dietarytype:hover, .dietaryfeatures:hover, .price:hover{
  cursor: pointer;
}
.title{
  padding-top: 50px;
  font-size: 70px;
}
.undertitle{
 padding-top: 40px;
}
.logo{
width: 100%;
  max-width: 100%;
  position: fixed;
  z-index: -100;
  overflow: hidden;
  opacity: 0.3;
}
.filter{
  position: absolute;
  right: 5vw;
  left: auto;
  top: 333px;
  border: 2px solid black;
  border-radius: 50px;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 101;
}
.filter-dropdown{
  position: absolute;
  right: 5vw;
  left: auto;
  top: 356px;
  border: 2px solid black;
  border-radius: 0px 0px 25px 25px;
  width: 150px;
  height: 150px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  z-index: 100;
}

.product-card{
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
.products{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  z-index: 1;
  position: static;
}
.background-img{
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  z-index: 0;
  position: relative;
  top: calc(100% / 2);
  transform: translate(0, -50%)
}
.item-name{
  z-index: 1;
  display: flex;
  justify-content: center;
  top: -70px;
  position: relative;
  word-break: break-word;
  font-size: 40px;
  font-family: "Century Gothic",serif;
  font-weight: bold;
  text-shadow: 0 0.2vw 0.4vw rgba(255, 255, 255, 0.8);
}
.product-card:hover{
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: translate(3px, -3px);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.rating-dropdown, .dietaryfeatures-dropdown, .price-dropdown, .dietarytype-dropdown{
  border: 2px solid black;
  border-radius: 5px;
  height: 200px;
  width: 200px;
  position: absolute;
  left: auto;
  right: 5vw;
  max-width: calc(100vw - 10vw);
  z-index: 99;
  background-color: rgba(255, 255, 255, 1);
}
.rating, .dietaryfeatures, .price, .dietarytype{
  width: 150px;
  text-align: center;
}
.rating-dropdown{
  top: 476px;
}
.dietarytype-dropdown{
  top: 376px;
}
.dietaryfeatures-dropdown{
  top: 446px;
}
.price-dropdown{
  top: 411px;
}
</style>
<style>
* { box-sizing: border-box; }

html, body, #app {
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
}

html, body, * {
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