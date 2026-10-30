<script setup>
import {tests} from "../data/ProductData.js";
import {useRoute} from "vue-router";

const route = useRoute();
const abc = tests.find(
    (product) => product.id == route.params.id
);

</script>

<template>
  <main>
    <div class="info__container">
      <h1>{{abc.title}}</h1>
      <p>Lorem ipsum </p>
      id= {{ abc.id}}
      Image = <img :src="abc.image" alt="">
      <button @click="clicker" >hgsrhsh</button>
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