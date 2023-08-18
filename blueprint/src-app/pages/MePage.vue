<template>
  <p v-if="state.userData">
    id: {{ state.userData.user.id }}<br/>
    provider id: {{ state.userData.provider_user.provider_user_id }}<br/>
    provider: {{ state.userData.provider_user.provider }}<br/>
    created: {{ state.userData.user.created_at }}<br/>
    updated: {{ state.userData.user.updated_at }}
  </p>
  <p><RouterLink to="/">back</RouterLink></p>
</template>

<script setup>
  import { reactive, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import superjet from 'superjet/client';

  const state = reactive({
    userData: null,
  });

  onMounted(async () => {
    const response = await superjet.api.get('/me');
    state.userData = response.data;
  });
</script>

