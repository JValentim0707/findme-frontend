<template>
  <v-btn @click="onClick" v-bind="buttondProperties"> {{ label }} </v-btn>
</template>

<script>
export default {
  props: {
    label: String,
    functionParams: Object,
    buttondProperties: Object
  },

  methods: {
    onClick() {
      // console.log(this.functionParams)
      this.$emit('onClick', 'bacon')
    }
  }
}
</script>