<template>
  <div class="px-4 py-2">
    <h1>Edit Product</h1>

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
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  methods: {
    handleSubmit(data) {
      this.$store.dispatch("updateProduct", {
        id: this.$route.params.id,
        data: data
      });

      this.$router.push("/");
    }
  }
};
</script>
