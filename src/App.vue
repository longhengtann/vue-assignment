<template>
  <div id="app">
    <v-app>
      <router-view v-if="$route.path === '/login'"></router-view>
      <main-layout v-else />
      <notification-list />
    </v-app>
  </div>
</template>

<script>
import MainLayout from "./layout/Main.vue";
import NotificationList from "./components/shared/NotificationList.vue";

export default {
  name: "app",
  components: {
    "main-layout": MainLayout,
    "notification-list": NotificationList
  }
};
</script>
