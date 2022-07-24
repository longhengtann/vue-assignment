<template>
  <div class="px-4 py-2">
    <v-row justify="space-between">
      <v-col md="6" cols="12">
        <h1>Product List</h1>
      </v-col>

      <v-col md="6" cols="12">
        <v-text-field
          outlined
          dense
          hide-details
          placeholder="search"
          prepend-inner-icon="mdi-magnify"
          class="mt-2"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row dense>
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "./components/Product/ProductCard.vue";

export default {
  components: {
    "product-card": ProductCard
  },
  methods: {},
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    console.log("mounted============");
    this.$store.dispatch("getProducts");
  }
};
</script>

<style></style>
