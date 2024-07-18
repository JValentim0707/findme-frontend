<template>
  <v-btn @click="onClick"> {{ label }} </v-btn>
</template>

<script>
export default {
  props: {
    label: String,
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>