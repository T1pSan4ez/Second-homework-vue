import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import GlobalComponent from "@/components/GlobalComponent.vue";

const app = createApp(App);

app.component('global-component', GlobalComponent);

app.mount('#app');