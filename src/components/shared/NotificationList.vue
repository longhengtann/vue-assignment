<template>
  <div class="notification-list">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage.vue";
import { mapState } from "vuex";

export default {
  components: {
    "notification-message": NotificationMessage
  },
  computed: {
    ...mapState(["notifications"])
  }
};
</script>

<style>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  width: 320px;
  z-index: 200;
}
</style>
