<template>
  <div class="text-center">
    <v-dialog v-model="dailog" width="500" color="primary">
      <v-card>
        <v-toolbar color="primary" dark>Product Detail</v-toolbar>

        <v-card-text v-if="product">
          <div class="mt-4">
            <p>Name: {{ product.name }}</p>
            <p>Price: ${{ product.price }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Description: {{ product.description }}</p>
            <p>Image:</p>
            <v-img
              :src="product.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="handleCloseViewProductDetailModal"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dailog", "product"],
  methods: {
    handleCloseViewProductDetailModal() {
      this.$emit("handle-close-view-product-detail-modal");
    }
  }
};
</script>
