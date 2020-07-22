import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 自定义导入
import axios from "axios";
import Vueaxios from "vue-axios";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

require('./mock/mock.js');
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Vueaxios,axios);

// Vue.use(Vueaxios,axios,Antd);//会报错,组件未注册

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
