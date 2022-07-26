import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./routes";

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: h => h(App)
});
