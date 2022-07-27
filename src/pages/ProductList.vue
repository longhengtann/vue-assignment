<template>
  <div class="px-4 py-2">
    <v-row justify="space-between">
      <v-col md="6" cols="12">
        <h1>Product List</h1>
      </v-col>

      <v-col md="6" cols="12">
        <div class="d-flex align-center">
          <v-text-field
            v-model="searchValue"
            outlined
            dense
            hide-details
            placeholder="search"
            prepend-inner-icon="mdi-magnify"
            class="mt-2"
            @change="getProductList"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <div class="mb-4 d-flex justify-end">
      <v-btn
        :to="{ name: 'create-product' }"
        color="primary accent-4"
        @click="handleViewProductDetail(product)"
      >
        Create Product
      </v-btn>
    </div>

    <v-overlay :value="isLoading">
      <div class="d-flex justify-center my-4">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </v-overlay>

    <product-card :products="products" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "../components/Product/ProductCard.vue";

export default {
  data: () => ({
    searchValue: "",
    isLoading: false
  }),
  components: {
    "product-card": ProductCard
  },
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    filteredProduct() {
      return products.filter(product =>
        product.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
    async getProductList() {
      this.isLoading = true;
      const response = await this.$store.dispatch(
        "getProducts",
        this.searchValue
      );
      this.isLoading = false;
    }
  }
};
</script>

<style></style>
