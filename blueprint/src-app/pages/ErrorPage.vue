<template>
  <h2>Sorry, something went wrong.</h2>
  <p>Please reload the page and try again.</p>
  <p><button @click="onReload">Reload</button></p>
</template>

<script setup>
  const onReload = () => {
    window.location.reload();
  };
</script>
