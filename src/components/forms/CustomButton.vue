<template>
  <v-btn @click="onClick"> {{ label }} </v-btn>
</template>

<script>
export default {
  props: {
    label: String,
  },

  methods: {
    onClick(params1) {
      // console.log('params', params, data)
      this.$emit('onClick', params1)
    }
  }
}
</script>