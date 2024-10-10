<template>
  <v-otp-input v-bind="otpInputProps"></v-otp-input>
</template>

<script setup>
  defineProps({
    otpInputProps: Object
  })
</script>