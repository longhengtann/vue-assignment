<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="onClickDashboard" />
    <v-toolbar-title> Dashboard </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: ["drawer"],
  data: () => ({
    isDrawer: false
  }),
  methods: {
    onClickDashboard() {
      this.isDrawer = !this.isDrawer;
      this.$emit("onClickDashboard", this.isDrawer);
    }
  }
};
</script>
