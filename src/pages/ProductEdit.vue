<template>
  <div class="px-4 py-2">
    <header-title title="Edit Product" />

    <overlay-loading :isLoading="isLoading" />

    <product-form
      :product="product"
      :isSubmiting="isSubmiting"
      @handle-submit-form="handleSubmit($event)"
    />
  </div>
</template>

<script>
import HeaderTitle from "../components/shared/HeaderTitle.vue";
import Form from "../components/Product/Form.vue";
import OverlayLoading from "../components/shared/OverlayLoading.vue";

export default {
  data: () => ({
    isLoading: false,
    isSubmiting: false
  }),
  components: {
    "header-title": HeaderTitle,
    "product-form": Form,
    "overlay-loading": OverlayLoading
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
    },
    async getProductDetail() {
      this.isLoading = true;
      await this.$store.dispatch("getProduct", this.$route.params.id);
      this.isLoading = false;
    }
  }
};
</script>
