import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if ( !navigator.geolocation ) {
  alert('Your browser does not support Geolocation');
  throw new Error('Your browser does not support Geolocation');
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
