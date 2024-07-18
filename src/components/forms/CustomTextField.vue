<template>
  <v-text-field :label="label" :type="type"></v-text-field>
</template>

<script>
export default {
  props: {
    label: String,
    type: String
  }
}
</script>