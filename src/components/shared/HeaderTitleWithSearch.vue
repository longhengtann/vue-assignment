<template>
  <div>
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
            @change="handleChangeSearchValue"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data: () => ({
    searchValue: ""
  }),
  methods: {
    handleChangeSearchValue() {
      this.$emit("handle-change-search-value", this.searchValue);
    }
  }
};
</script>
