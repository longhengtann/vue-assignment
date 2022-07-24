<template>
  <div>
    <drawer :drawer="drawer" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-header @onClickDashboard="drawer = $event" />
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue";

export default {
  components: {
    drawer: Drawer,
    "app-header": AppBar
  },
  data: () => ({
    drawer: false
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
