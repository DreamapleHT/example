import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 自定义导入
import axios from "axios";
import Vueaxios from "vue-axios";

require('./mock/mock.js');



Vue.config.productionTip = false;
Vue.use(Vueaxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
