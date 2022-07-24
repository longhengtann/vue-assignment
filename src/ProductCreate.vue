<template>
  <div class="px-4 py-2">
    <h1 class="text-lg">Create New Product</h1>

    <product-form
      :product="product"
      @handle-submit-form="handleSubmit($event)"
    />
  </div>
</template>

<script>
import Form from "./components/Product/Form.vue";

export default {
  components: {
    "product-form": Form
  },
  data: () => ({
    product: {}
  }),
  methods: {
    handleSubmit(data) {
      this.$store.dispatch("createProduct", data);

      this.$router.push("/");
    }
  }
};
</script>
