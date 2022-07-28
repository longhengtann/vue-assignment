<template>
  <v-dialog v-model="dailog" persistent max-width="600">
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="darken-1" text @click="handleCloseDailog">
          Close
        </v-btn>
        <v-btn
          :loading="isSubmitting"
          color="green darken-1"
          text
          @click="handleConfirmDelete"
        >
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dailog", "isSubmitting", "title", "description"],
  methods: {
    handleCloseDailog() {
      this.$emit("handle-close-dailog");
    },
    handleConfirmDelete() {
      this.$emit("handle-confirm");
    }
  }
};
</script>
