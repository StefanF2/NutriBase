<script setup>
import {RouterView, RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <div class="nav__logo">NutriBase</div>
    <ul class="nav__links">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/products">Products</RouterLink></li>
      <li><RouterLink to="/about">About us</RouterLink></li>
    </ul>
    <div class="btns">
      <button class="btn">Login</button>
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
  font-family: Arial;
}

.nav__links{
  list-style: none;
  display: flex;
  gap: 2rem;
}
.nav__links li a{
  position: relative;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
}
.btns{
  display: flex;
}
.btn{
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
}
</style>