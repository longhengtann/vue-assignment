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
    <v-file-input
      show-size
      v-model="image"
      @change="handleUploadImageChange(image)"
      label="Image"
    ></v-file-input>

    <button-submit :valid="valid" @handle-click-submit="handleSubmit" />
  </v-form>
</template>

<script>
import TextFieldInput from "../shared/TextFieldInput.vue";
import FileUpload from "../shared/FileUpload.vue";
import ButtonSubmit from "../shared/ButtonSubmit.vue";
import { getBase64 } from "../../helper/helperFunction";

export default {
  props: ["product"],
  data: () => ({
    valid: true,
    image: null,
    imageUrl: "",
    required() {
      return v => (v && v.length > 0) || "Required!";
    }
  }),
  components: {
    "text-field-input": TextFieldInput,
    "file-upload": FileUpload,
    "button-submit": ButtonSubmit
  },
  methods: {
    handleUploadImageChange(img) {
      getBase64(img, imageUrl => (this.imageUrl = imageUrl));
    },
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
