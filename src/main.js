import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import routes from "./routes";
import store from "./store";

Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: "history" });

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: h => h(App)
});
