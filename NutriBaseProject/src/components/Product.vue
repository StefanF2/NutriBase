<script setup>
import { ref } from 'vue';

const message = ref('');
const isFilterOpen = ref(false);

function toggleFilter() {
  isFilterOpen.value = !isFilterOpen.value;
  const filterklasse = document.getElementById('filter');
  if(filterklasse.value.borderRadius === "50px") {
    filterklasse.style.borderRadius = "50px 50px 0px 0px";
  }else{
    filterklasse.style.borderRadius = "50px";
  }
}
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
  <p v-if="isFilterOpen" class="filter-dropdown">test</p>
</div>
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
  top: 368px;
  border: 2px solid black;
  border-radius: 0px 0px 50px 50px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: -1;
}
</style>