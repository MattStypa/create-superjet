<template>
  <SuperjetApp>
    <h1>superjet</h1>
    <ErrorPage v-if="superjet.state.criticalError"/>
    <LoginPage v-else-if="!superjet.state.authenticated"/>
    <RouterView v-else/>
  </SuperjetApp>
</template>

<script setup>
  import 'normalize.css';
  import { RouterView } from 'vue-router';
  import superjet from 'superjet/client';
  import ErrorPage from '@/pages/ErrorPage.vue';
  import LoginPage from '@/pages/LoginPage.vue';

  const { SuperjetApp } = superjet;
</script>

<style>
  :root {
    --color-light: #CCC;
    --color-dim: #555;
    --color-dark: #111;
    --color-bright: #EAB308;
  }
  * {
    box-sizing: border-box;
  }
  body {
    padding: 1em;
    color: var(--color-light);
    background-color: var(--color-dark);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  }
  a {
    color: var(--color-bright);
    text-decoration: none;
    outline: none;
  }
  a:hover, a:focus-visible {
    text-decoration: underline;
  }
  button {
    padding: 1em;
    background-color: var(--color-bright);
    border: 1px solid var(--color-bright);
    border-radius: 0.4em;
    cursor: pointer;
    user-select: none;
  }
  button:focus-visible {
    outline: solid var(--color-bright);
    outline-offset: 0.2em;
    outline-width: 2px;
  }
  button[disabled] {
    color: var(--color-dim);
    border-color: var(--color-dim);
    background-color: var(--color-dark);
    cursor: not-allowed;
  }
  #app {
    height: calc(100vh - 2em);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
