import { createApp } from 'vue';
import App from './App.vue';
import { loadPlugins } from '@/config/plugins';
import './styles/main.css';
import 'material-symbols';

const app = createApp(App);

loadPlugins(app);

app.mount('#app');
