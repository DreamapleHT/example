import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.prototype.$axios=axios;

Vue.config.productionTip = false
require('./mock.js')
require('./axios.js')


new Vue({
  render: h => h(App),
}).$mount('#app')
