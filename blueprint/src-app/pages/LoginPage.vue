<template>
  <p v-if="message">{{ message }}</p>
  <p><button disabled>Log in Google</button></p>
  <p><button disabled>Log in Facebook</button></p>
  <p><button @click="login">Test Login</button></p>
</template>

<script setup>
  import { computed } from 'vue';
  import superjet from 'superjet/client';

  const message = computed(() => {
    if (superjet.state.logoutSuccess) return 'You have been logged out from all devices.';
    if (superjet.state.logoutError) return 'Unable to log out from all devices. You were not logged in. Please login and try again.';
    if (superjet.state.tokenError) return 'You are not logged in.';
    return null;
  });

  const login = async () => {
    /**
     * The development login should never be used in production.
     * Once configured, 'google' and 'facebook' providers can be used.
     */
    await superjet.auth.login('test');
  };
</script>
