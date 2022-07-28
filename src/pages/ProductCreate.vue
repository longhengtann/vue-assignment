<template>
  <div class="px-4 py-2">
    <header-title title="Create New Product" />

    <product-form
      :product="product"
      :isSubmiting="isSubmiting"
      @handle-submit-form="handleSubmit($event)"
    />
  </div>
</template>

<script>
import Form from "../components/Product/Form.vue";
import HeaderTitle from "../components/shared/HeaderTitle.vue";

export default {
  components: {
    "product-form": Form,
    "header-title": HeaderTitle
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
      this.$router.push("/products");
    }
  }
};
</script>
