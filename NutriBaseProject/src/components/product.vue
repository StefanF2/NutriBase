<script setup>
import { ref } from 'vue';

const message = ref('');
const isFilterOpen = ref(false);

function toggleFilter() {
  isFilterOpen.value = !isFilterOpen.value;
  const filterklasse = document.getElementById('filter');
  }

let test;
test = ['Apfel','Banane','Birne'];
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
  <p v-if="isFilterOpen" class="filter-dropdown">
    <button class="filter-options"> Food </button>
    <button class="filter-options"> Beverage </button>
    <button class="filter-options"> Calories </button>
  </p>
</div>

  </div>
  <div class="products">
    <li class="product-card" v-for="(item, index) in test" :key="index">
      <div class="item-name">{{ item }}</div>
      <img class="background-img" src="../assets/Logo.jpg">
    </li>
  </div>
</template>

<style scoped>

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
.input-button:hover, .filter:hover{
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
width: 100vw;
  position: fixed;
  z-index: -100;
  overflow: hidden;
  opacity: 0.3;
}
.filter{
  position: absolute;
  left: 70vw;
  top: 333px;
  border: 2px solid black;
  border-radius: 50px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.filter-dropdown{
  position: absolute;
  left: 70vw;
  top: 356px;
  border: 2px solid black;
  border-radius: 0px 0px 25px 25px;
  width: 100px;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  z-index: -1;
}
.filter-options{
  background-color: transparent;
  border: none;
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
}
.products{
  display: flex;
  flex-direction: row;
  z-index: 1;
  position: absolute;
}
.background-img{
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  z-index: 0;
  display: block;
}
.item-name{
  z-index: 1;
  display: flex;
  justify-content: center;
  top: 90px;
  position: relative;
  font-size: 40px;
  font-family: "Century Gothic",serif;
  font-weight: bold;
  text-shadow: 0 0.2vw 0.4vw rgba(255, 255, 255, 0.8);
}
.product-card:hover{
  border: 5px solid black;
}
</style>