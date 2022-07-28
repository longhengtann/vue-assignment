<template>
  <div>
    <v-file-input
      show-size
      v-model="image"
      @change="handleUploadImageChange(image)"
      label="Image"
    ></v-file-input>
    <v-img
      :src="imageUrl || defaultUrl"
      class="white--text align-end"
      height="200px"
      width="200px"
    />
  </div>
</template>

<script>
import { getBase64 } from "../../helper/helperFunction";

export default {
  props: ["defaultUrl"],
  data: () => ({
    image: "",
    imageUrl: ""
  }),
  methods: {
    handleUploadImageChange(img) {
      getBase64(img, imageUrl => {
        this.imageUrl = imageUrl;
        this.$emit("handle-get-image-url", imageUrl);
      });
    }
  }
};
</script>
