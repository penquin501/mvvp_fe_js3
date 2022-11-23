import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Chart from 'primevue/chart';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
// import '../node_modules/primeflex/primeflex.css'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('InputText', InputText);
// app.component('Button', Button);
// app.component('Toast', Toast);
app.component('Chart', Chart);

app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
