import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import globalStyle from './assets/globalStyle.css';
import deneme from './assets/deneme.js';


const app = createApp(App)
app.use(router);
app.use(globalStyle);
app.use(deneme);
app.use(store)
app.mount('#app')
