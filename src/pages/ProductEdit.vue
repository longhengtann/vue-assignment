<template>
  <div class="px-4 py-2">
    <h1>Edit Product</h1>

    <v-overlay :value="isLoading">
      <div class="d-flex justify-center my-4">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </v-overlay>

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
  data: () => ({
    isLoading: false,
    isSubmiting: false
  }),
  components: {
    "product-form": Form
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
    async handleSubmit(data) {
      this.isSubmiting = true;
      await this.$store.dispatch("updateProduct", {
        id: this.$route.params.id,
        data: data
      });

      this.isSubmiting = false;
      this.$router.push("/");
    },
    async getProductDetail() {
      this.isLoading = true;
      await this.$store.dispatch("getProduct", this.$route.params.id);
      this.isLoading = false;
    }
  }
};
</script>
