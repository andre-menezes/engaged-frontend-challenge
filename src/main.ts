import { createApp } from 'vue';
import App from './App.vue';
import { loadPlugins } from '@/config/plugins';

const app = createApp(App);

loadPlugins(app);

app.mount('#app');
