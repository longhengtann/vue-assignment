<template>
  <v-alert :type="notification.type">{{ notification.message }}</v-alert>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["notification"],
  data: () => ({
    timeout: null
  }),
  created() {
    setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(["removeNotification"])
};
</script>
