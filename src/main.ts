import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl')"
 
mapboxgl.accessToken = 'pk.eyJ1IjoianVhbm1hcGVyIiwiYSI6ImNsNXYzaG9hZjAxbTgzZGxjNjYwNXM1MTIifQ.-oX65tNNjHYyvjdvuftSbg';

if ( !navigator.geolocation ) {
  alert('Your browser does not support Geolocation')
  throw new Error('Your browser does not support Geolocation')
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
