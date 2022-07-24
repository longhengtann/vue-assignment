<template>
  <v-col class="mb-4" cols="3">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 5 : 2">
        <v-img
          :src="product.image"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>
            {{ product.description }}
          </v-card-subtitle>
        </v-img>

        <v-card-actions>
          <v-btn text>
            <router-link :to="{ name: 'product', params: { id: product.id } }"
              >Edit</router-link
            >
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="teal accent-4">
            Detail
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  props: ["product"]
};
</script>
