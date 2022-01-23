import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import layout from "./assets/css/layout.css";

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

new Vue({
  router,
  layout,
  render: h => h(App)
}).$mount("#app");
