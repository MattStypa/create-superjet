<template>
  <p>Hello. You are logged in.</p>
  <p><RouterLink to="/me">/me</RouterLink></p>
  <p><button @click="logout">Log out</button></p>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import superjet from 'superjet/client';

  const logout = async () => {
    await superjet.auth.logout();
  };
</script>