<template>
  <v-text-field 
    v-bind="properties"
    :error="error"
    :label="label" 
    :placeholder="placeholder" 
    :prepend-inner-icon="prependInnerIcon"
    :type="type"
    :rules="rules"
  ></v-text-field>
</template>

<script setup>
defineProps({
    error: Boolean,
    properties: Object,
    label: String,
    placeholder: String,
    prependInnerIcon: String,
    type: String,
    rules: Object
})
</script>