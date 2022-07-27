<template>
  <div class="px-4 py-2">
    <h1 class="text-lg">Create New Product</h1>

    <product-form
      :product="product"
      :isSubmiting="isSubmiting"
      @handle-submit-form="handleSubmit($event)"
    />
  </div>
</template>

<script>
import Form from "../components/Product/Form.vue";

export default {
  components: {
    "product-form": Form
  },
  data: () => ({
    product: {},
    isSubmiting: false
  }),
  methods: {
    async handleSubmit(data) {
      this.isSubmiting = true;
      await this.$store.dispatch("createProduct", data);

      this.isSubmiting = false;
      this.$router.push("/");
    }
  }
};
</script>
