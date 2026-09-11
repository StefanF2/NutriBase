<script setup>
import {RouterView, RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <div class="nav__logo">Nutri-Base</div>
    <ul class="nav__links">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/products">Favorites</RouterLink></li>
      <li><RouterLink to="/about">About us</RouterLink></li>
    </ul>
    <div class="nav__button__container">
      <button class="nav__button">Login</button>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav{
  width: 100%;
  padding: 1rem 5%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo{
  font-size: 2rem;
  font-weight: 700;
  color: white;
  font-family: Century Gothic, Tahoma, sans-serif;
}
.nav__links{
  list-style: none;
  display: flex;
}
.nav__links li a{
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
   color: white;
  font-family: Century Gothic, sans-serif;
  padding: 0 1.5rem;
}

.nav__links li a:hover{
  text-decoration: underline;
}

.nav__links li + li{
  border-left: 1px solid white;
}

.nav__button__container{
  display: flex;
}
.nav__button{
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-family: Century Gothic, Tahoma, sans-serif;
  border: 2px solid black;
  border-radius: 2rem;
  cursor: pointer;
}
</style>