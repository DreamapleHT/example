import Vue from 'vue'
import App from './App.vue'

// 导入axios
import axios from 'axios'

Vue.prototype.$axios=axios;

Vue.config.productionTip = false

// 全局引入模拟数据的mock.js
require('./mock.js')

require('./axios.js')


new Vue({
  render: h => h(App),
}).$mount('#app')
