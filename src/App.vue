<template>
  <div id="app">
    <v-app>
      <main-layout v-if="isLogin" />
      <login v-else @handleLogin="isLogin = $event" />
    </v-app>
  </div>
</template>

<script>
import MainLayout from "./layout/Main.vue";
import Login from "./components/Login.vue";
import { getFromLocalStorage } from "./helper/localStorage";

export default {
  name: "app",
  components: {
    "main-layout": MainLayout,
    login: Login
  },
  data: () => ({
    isLogin: false
  }),
  mounted() {
    this.checkAuth();
  },
  methods: {
    async checkAuth() {
      const isAuth = getFromLocalStorage("isAuth");

      if (isAuth) {
        this.isLogin = true;
        this.$router.push("/products");
      } else {
        this.isLogin = false;
      }
    }
  }
};
</script>
