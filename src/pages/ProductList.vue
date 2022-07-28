<template>
  <div class="px-4 py-2">
    <header-title-with-search
      title="Product List"
      @handle-change-search-value="getProductList($event)"
    />

    <div class="mb-4 d-flex justify-end">
      <v-btn
        :to="{ name: 'create-product' }"
        color="primary accent-4"
        @click="handleViewProductDetail(product)"
      >
        Create Product
      </v-btn>
    </div>

    <overlay-loading :isLoading="isLoading" />
    <product-card :products="products" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTitleWithSearch from "../components/shared/HeaderTitleWithSearch.vue";
import ProductCard from "../components/Product/ProductCard.vue";
import OverlayLoading from "../components/shared/OverlayLoading.vue";

export default {
  data: () => ({
    isLoading: false
  }),
  components: {
    "product-card": ProductCard,
    "overlay-loading": OverlayLoading,
    "header-title-with-search": HeaderTitleWithSearch
  },
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    this.getProductList("");
  },
  methods: {
    async getProductList(searchValue) {
      this.isLoading = true;
      await this.$store.dispatch("getProducts", searchValue);
      this.isLoading = false;
    }
  }
};
</script>

<style></style>
