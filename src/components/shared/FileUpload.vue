<template>
  <div>
    <v-file-input
      :rules="isRequired === 'true' ? [required()] : []"
      accept="image/png, image/jpeg, image/bmp"
      prepend-icon="mdi-file"
      :label="label"
    ></v-file-input>
  </div>
</template>

<script>
export default {
  props: ["name", "label", "isRequired"],
  data: () => ({
    required() {
      return v => (v && v.length > 0) || "Required!";
    }
  })
};
</script>
