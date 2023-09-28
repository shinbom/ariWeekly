<template>
  <div id="app" >
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { initializeApp } from "firebase/app";
import userService from './services/userService';

onMounted(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyDfCyIdzViI-43xn8gqN8Ub5dGda2yGjr0",
    authDomain: "ariweekly-dfa03.firebaseapp.com",
    projectId: "ariweekly-dfa03",
    storageBucket: "ariweekly-dfa03.appspot.com",
    messagingSenderId: "305342243128",
    appId: "1:305342243128:web:d94e03bf47a51db836a1cd"
  }
  initializeApp(firebaseConfig);

  const UserService = new userService()
  UserService.getLoginData()
})

</script>

<style lang="scss" scoped>
  #app{
    height:400px;
    padding-top:50px;
    box-sizing: border-box;
  }
</style>