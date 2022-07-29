<template>
  <div>
    <confirm-modal
      :dailog="dailog"
      :isSubmitting="isSubmitting"
      @handle-close-dailog="handleCloseDailog"
      @handle-confirm="handleConfirmDelete"
      title="Are you sure you want to delete this product?"
      description="Click button confirm to delete."
    />
  </div>
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
      this.isSubmitting = false;
      this.handleCloseDailog();

      await this.$store.dispatch("getProducts", "");
    },
    handleCloseDailog() {
      this.$emit("handle-close-modal");
    }
  }
};
</script>
