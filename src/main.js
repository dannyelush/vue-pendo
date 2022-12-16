import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Pendo from './index';

const app = createApp(App);

app.use(Pendo, {
  id: 'b8b99dbc-c5ef-4035-4d03-b71c0e8483ce',
  isEnabled: true
});

app.mount('#app');
