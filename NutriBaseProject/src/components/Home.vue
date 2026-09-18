<script setup>
import {ref, computed} from "vue";
import Result from "./Result.vue";

const input = ref();
const searchedbar = ref(false);
function showResults() {
  searchedbar.value = true;
}

const tests = ref([
  {
    id: 1,
    title: "Produkt1",
    image: 'src/assets/vue.svg'
  },
  {
    id: 2,
    title: "Produkt2",
    image: 'src/assets/Wasser.jpg'
  },
  {
    id: 3,
    title: "Produkt3",
    image: 'src/assets/Wasser.jpg'
  },
  {
    id: 4,
    title: "Produkt4",
    image: 'src/assets/Wasser.jpg'
  },
  {
    id: 5,
    title: "Produkt5",
    image: 'src/assets/Wasser.jpg'
  },
  {
    id: 6,
    title: "Produkt6",
    image: 'src/assets/vue.svg'
  },
  {
    id: 7,
    title: "Produkt7",
    image: 'src/assets/vue.svg'
  },
  {
    id: 8,
    title: "Produkt8",
    image: 'src/assets/vue.svg'
  },
])
// Entfernt leere spaces beim Input
const filteredTests = computed(() => {
  if (!input.value) {
    return tests.value;
  }

  const search = input.value.toLowerCase().replace(/\s/g, "");

  return tests.value.filter(test =>
      test.title.toLowerCase().replace(/\s/g, "").includes(search)
  );
});

</script>

<template>
  <main>
    <div class="home">
      <h1 id="home__header">Nutri-Base</h1>
      <h2 id="home__info">A Database to search for Product information</h2>
        <div class="home__search__container">
          <input  id="home__searchbar" type="search" placeholder="Search..." v-model.lazy="input" @keyup.enter="showResults"/>
          <button id="home__button" type="submit"><img class="home__button" src="../assets/searchbar_icon.png" alt="icon" @click="showResults"></button>
        </div>

    </div>
    <div class="result" v-show="searchedbar">
      <h2 id="result__header" >Best results: </h2>

      <div class="result__grid">
        <Result
          v-for="test in filteredTests"
          :key="test.id"
          :title="test.title"
          :image="test.image"
          />
      </div>
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem auto;
  gap: 3rem;
}
.home__search__container{
  position: relative;
  width: 45%;
}

#home__header{
  font-size: 6rem;
  font-family: "Century Gothic", Helvetica, sans-serif;
}
#home__info{
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

#home__searchbar{
  width: 100%;
  height: 3.5rem;
  font-size: 1.5rem;
  border-radius: 2rem;
  border: 3px solid black;
  box-sizing: border-box;
  padding: 0 4rem 0 1.5rem;
}
.home__button{
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
.result {
  margin: 0 15rem;
}

.result__grid {
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