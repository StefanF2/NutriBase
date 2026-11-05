<script setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAuth} from "../composables/auth.js"
import {users} from "../data/Users.js"

const email = ref('');
const password = ref('');
const router = useRouter();

const {login} = useAuth();

function login_checker() {
  const success = login(email.value, password.value);
  if (!success) {
    console.log("Kein Email oder Passwort");
    return
  }
    router.push('/')
}

</script>

<template>
  <div class="login__container">
    <form action="" @submit.prevent="login_checker()" autocomplete="off">
      <div class="login__input__container">
        <label for="email"><b>E-Mail</b></label>
        <input type="email" id="email" name="email" placeholder="E-Mail" v-model="email" />
      </div>
      <div class="login__input__container">
        <label for="password"><b>Password</b></label>
        <input type="password" id="password" name="password" placeholder="Password" v-model="password" />
      </div>
      <div class="login__input__container">
        <button class="login__button">
          <b>Login</b>
        </button>
      </div>
    </form>
  </div>
<RouterView />
</template>

<style scoped>
.login__container {
  font-family: "Century Gothic", Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  gap: 2rem;
}

.login__input__container {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.login__input__container input {
  padding: 0.8rem;
  font-size: 1rem;
  width: 300px;
  box-sizing: border-box;
}

.login__button {
  font-family: "Century Gothic", Helvetica, sans-serif;
  padding: 0.8rem;
  width: 300px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 2rem;
  border-style: solid;
  border-width: 3px;
  background-color: white;
}
</style>