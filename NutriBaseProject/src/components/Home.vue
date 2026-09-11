<script setup>

</script>

<template>
  <main>
    <div class="home">
      <h1 id="home__header">Nutri-Base</h1>
      <h2 id="home__info">A Database to search for Product information</h2>
      <div class="home__search__container">
        <input id="home__searchbar" type="search" placeholder="Search..." />
        <button id="home__button" type="submit"><img class="home__button" src="../assets/searchbar_icon.png" alt="icon"></button>
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
  margin: 10rem auto;
  gap: 3rem;
}
.home__search__container{
  position: relative;
  width: 20%;
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

</style>