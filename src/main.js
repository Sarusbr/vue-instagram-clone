import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import globalStyle from './assets/globalStyle.css';

const app = createApp(App)
app.use(router);
app.use(globalStyle);
app.use(store)
app.mount('#app')
