<template>
  <div>
    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        class="mb-4"
        cols="3"
      >
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 5 : 2">
            <v-img
              :src="product.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                <div :class="`${productColor(product.quantity)} headerClass`">
                  {{ product.name }}
                </div></v-card-title
              >

              <v-card-subtitle>
                <div :class="`${productColor(product.quantity)}`">
                  <span>Quantity: {{ product.quantity }}</span> -
                  <span>Price: ${{ product.price }}</span>
                </div>
              </v-card-subtitle>

              <stock-out-overlay v-if="product.quantity == 0" />
            </v-img>

            <v-card-text class="text--primary body-2 pl-2">
              <div class="headerClass">{{ product.description }}</div>
            </v-card-text>

            <!-- Button action -->
            <v-card-actions class="d-flex justify-space-between flex-wrap">
              <v-btn
                class="mx-1 my-1"
                :to="{ name: 'product', params: { id: product.id } }"
                color="primary"
                small
              >
                Edit
              </v-btn>
              <div class="d-flex justify-space-between flex-wrap">
                <v-btn
                  class="mx-1 my-1"
                  color="teal"
                  small
                  @click="handleViewProductDetail(product)"
                >
                  Detail
                </v-btn>
                <v-btn
                  class="mx-1 my-1"
                  small
                  color="error"
                  @click="handleVisibleConfirmModal(product.id)"
                >
                  Delete
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <product-view-detail-modal
      :dailog="isVisibleProductDetailModal"
      @handle-close-view-product-detail-modal="
        isVisibleProductDetailModal = false
      "
      :product="selectedProduct"
    />
    <confirm-delete-modal
      :selectedProductId="selectedProductId"
      :dailog="isVisibleConfirmDeleteModal"
      @handle-close-modal="isVisibleConfirmDeleteModal = false"
    />
  </div>
</template>

<script>
import ProductViewDetailModal from "./ProductViewDetailModal.vue";
import ConfirmDeleteModal from "./ConfirmDeleteProduct.vue";
import StockOutOverlay from "./StockOutOverlay.vue";

export default {
  props: ["products"],
  components: {
    "product-view-detail-modal": ProductViewDetailModal,
    "confirm-delete-modal": ConfirmDeleteModal,
    "stock-out-overlay": StockOutOverlay
  },
  data: () => ({
    isVisibleConfirmDeleteModal: false,
    isVisibleProductDetailModal: false,
    selectedProduct: null,
    selectedProductId: null
  }),
  methods: {
    handleVisibleConfirmModal(productId) {
      this.selectedProductId = productId;
      this.isVisibleConfirmDeleteModal = true;
    },
    handleViewProductDetail(product) {
      this.dailog = !this.dailog;
      this.selectedProduct = product;
    },
    productColor(qty) {
      if (qty > 0 && qty < 10) {
        return "warning--text";
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
