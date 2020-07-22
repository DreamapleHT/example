import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';



Vue.config.productionTip = false
// 全局引入模拟数据的mock.js
require('./mock/mock.js')

Vue.use(Antd)
new Vue({
  render: h => h(App),
}).$mount('#app')
