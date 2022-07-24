<template>
  <v-text-field
    :v-model="name"
    :rules="isRequired === 'true' ? [required()] : []"
    :label="label"
  />
</template>

<script>
export default {
  props: ["value", "name", "label", "isRequired"],
  data: () => ({
    required() {
      return v => (v && v.length > 0) || "Required!";
    }
  })
};
</script>
