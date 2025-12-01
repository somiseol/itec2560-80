import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const app = createApp(App) // create Vue app
const pinia = createPinia() // create pinia store for app

app.use(pinia) // tell app to use pinia store

app.mount('#app')