import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import tips from './components/GlobalComponent/TipsMessage.vue';

createApp(App).use(store).use(router)
  .component('TipsMessage', tips)
  .mount('#app');
