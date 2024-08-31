<template>
  <v-stepper v-bind="stepperProps">
    <v-stepper-header>
      <v-stepper-item
        v-for="step in stepperValue"
        :title="step.title"
        :value="step.value"
        :complete="step.value"
      ></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
</template>

<script setup>
  defineProps({
    stepperValue: Array,
    stepperProps: Object,
  })
</script>