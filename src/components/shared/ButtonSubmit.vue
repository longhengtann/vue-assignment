<template>
  <div class="px-4 py-2 button-container">
    <div class="d-flex justify-end">
      <v-btn class="mx-1" depressed @click="$router.back()">
        Back
      </v-btn>
      <v-btn
        :loading="isSubmiting"
        class="mx-1"
        depressed
        color="primary"
        :disabled="!valid"
        @click="handleSubmit"
      >
        Submit
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["valid", "isSubmiting"],
  methods: {
    handleSubmit() {
      this.$emit("handle-click-submit");
    }
  }
};
</script>

<style>
.button-container {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  background-color: "#121212";
}
</style>
