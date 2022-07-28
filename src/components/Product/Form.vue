<template>
  <v-form v-if="product" v-model="valid">
    <v-text-field
      v-model="product.name"
      type="text"
      :rules="[required()]"
      label="Name"
    />
    <v-text-field
      v-model="product.description"
      type="text"
      :rules="[required()]"
      label="Description"
    />
    <v-text-field
      v-model="product.price"
      type="number"
      :rules="[required()]"
      label="Price"
    />
    <v-text-field
      v-model="product.quantity"
      type="number"
      :rules="[required()]"
      label="Quantity"
    />
    <file-upload
      :defaultUrl="product.image"
      @handle-get-image-url="imageUrl = $event"
    />
    <button-submit
      :isSubmiting="isSubmiting"
      :valid="valid"
      @handle-click-submit="handleSubmit"
    />
  </v-form>
</template>

<script>
import TextFieldInput from "../shared/TextFieldInput.vue";
import FileUpload from "../shared/FileUpload.vue";
import ButtonSubmit from "../shared/ButtonSubmit.vue";

export default {
  props: ["product", "isSubmiting"],
  data: () => ({
    valid: true,
    imageUrl: "",
    required() {
      return v => (v && v.length > 0) || "Required!";
    }
  }),
  components: {
    "file-upload": FileUpload,
    "text-field-input": TextFieldInput,
    "file-upload": FileUpload,
    "button-submit": ButtonSubmit
  },
  methods: {
    handleSubmit() {
      const productData = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: this.product.quantity,
        image: this.imageUrl || this.product.image
      };

      this.$emit("handle-submit-form", productData);
    }
  }
};
</script>
