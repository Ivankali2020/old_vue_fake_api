import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import 'jquery'
import '@/style.css'
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = require('jquery');
Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
}).$mount('#app')
