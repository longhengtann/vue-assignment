<template>
  <confirm-modal
    :dailog="dailog"
    :isSubmitting="isSubmitting"
    @handle-close-dailog="handleCloseDailog"
    @handle-confirm="handleConfirmDelete"
    title="Are you sure you want to delete this product?"
    description="Click button confirm to delete."
  />
</template>

<script>
import ConfirmModal from "../shared/ConfirmModal.vue";

export default {
  props: ["dailog", "selectedProductId"],
  components: {
    "confirm-modal": ConfirmModal
  },
  data: () => ({
    isSubmitting: false
  }),
  methods: {
    async handleConfirmDelete() {
      this.isSubmitting = true;
      await this.$store.dispatch("deleteProduct", this.selectedProductId);
      await this.$store.dispatch("getProducts", "");
      this.isSubmitting = false;
      this.handleCloseDailog();
    },
    handleCloseDailog() {
      this.$emit("handle-close-modal");
    }
  }
};
</script>
