<template>
  <v-btn @click="onClick"> {{ label }} </v-btn>
</template>

<script>
export default {
  props: {
    label: String,
    functionParams: Object
  },

  methods: {
    onClick() {
      // console.log(this.functionParams)
      this.$emit('onClick', 'bacon')
    }
  }
}
</script>