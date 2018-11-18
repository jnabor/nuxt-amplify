<template>
  <v-alert
    v-model="show"
    :type="type"
    transition="fade-transition"
    outline
    class="mb-4 mt-0">
    {{ message }}
  </v-alert>
</template>
<script>
export default {
  props: {
    show: Boolean,
    type: String,
    message: String
  }
}
</script>
