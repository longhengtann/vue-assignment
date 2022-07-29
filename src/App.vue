<template>
  <div id="app">
    <v-app>
      <main-layout v-if="isLogin" />
      <login v-else @handleLogin="isLogin = $event" />
      <notification-list />
    </v-app>
  </div>
</template>

<script>
import MainLayout from "./layout/Main.vue";
import Login from "./components/Login.vue";
import NotificationList from "./components/shared/NotificationList.vue";
import { getFromLocalStorage } from "./helper/localStorage";
import { IS_AUTH_KEY } from "./constant";

export default {
  name: "app",
  components: {
    "main-layout": MainLayout,
    login: Login,
    "notification-list": NotificationList
  },
  data: () => ({
    isLogin: false
  }),
  mounted() {
    this.checkAuth();
  },
  methods: {
    async checkAuth() {
      const isAuth = getFromLocalStorage(IS_AUTH_KEY);

      if (isAuth) {
        this.isLogin = true;
        this.$router.push("/products");
      } else {
        this.isLogin = false;
        this.$router.push("/");
      }
    }
  }
};
</script>
