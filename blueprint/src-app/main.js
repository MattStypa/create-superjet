import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from '@/App.vue';
import HomePage from '@/pages/HomePage.vue';
import MePage from '@/pages/MePage.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/me', component: MePage },
    { path: '/:routePath(.*)', component: NotFound },
  ],
});

const app = createApp(App);

app.use(router);
app.mount('#app');
