<template>
  <v-overlay :value="isLoading">
    <div class="d-flex justify-center my-4">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </v-overlay>
</template>

<script>
export default {
  props: ["isLoading"]
};
</script>
