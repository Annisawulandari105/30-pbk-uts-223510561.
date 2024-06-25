import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Quasar); // tidak perlu menambahkan {} di dalam use(Quasar, { plugins: {} })
app.mount('#app');

