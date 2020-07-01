import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "amfe-flexible";
import { Lazyload } from "vant";
Vue.use(Lazyload);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
