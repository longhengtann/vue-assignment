<template>
  <div id="app">
    <v-app>
      <main-layout />
      <!-- <login v-else @handleLogin="isLogin = $event" /> -->
    </v-app>
  </div>
</template>

<script>
import MainLayout from "./layout/Main.vue";
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    "main-layout": MainLayout,
    login: Login
  },
  data: () => ({
    isLogin: false
  })
};
</script>
