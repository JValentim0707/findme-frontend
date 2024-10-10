<template>
  <v-file-input :accept="acceptOptions" :label="label" v-bind="fileInputOptions"></v-file-input>
</template>

<script setup>
  defineProps({
    acceptOptions: String,
    label: String,
    fileInputOptions: Object
  })
</script>