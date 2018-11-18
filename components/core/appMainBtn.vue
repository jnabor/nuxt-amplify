<template>
  <v-btn
    :loading="loading"
    :disabled="disabled"
    block
    large
    class="white--text"
    color="button"
    @click.native="onSubmit()">
    {{ label }}
  </v-btn>
</template>
<script>
export default {
  props: {
    loading: Boolean,
    disabled: Boolean,
    label: String
  },
  methods: {
    onSubmit() {
      this.$emit('submit')
    }
  }
}
</script>
