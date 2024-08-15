<template>
  <div class="card-container">
    <div class="card-header font-primary">
      <span>{{ title }}</span>
      <v-icon :icon="icon" :color="iconColor" :size="iconSize"></v-icon>
    </div>
    <div class="card-body font-primary">
      <v-icon icon="mdi-menu-up" color="#0cab57" size="50"></v-icon>
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    icon: String,
    iconColor: String,
    iconSize: String,
    value: String
  })
</script>

<style lang="scss" scoped>
.card-container {
  margin: 20px 20px;
  background: transparent;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(90deg, white, white), linear-gradient(90deg, #7810C2, #0CABA8);
  background-clip: padding-box, border-box;
  background-origin: border-box;
  border: 2px solid transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-width: 30%;
  .card-header {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #8A8A8A;
    font-weight: 300;
    font-size: 14px;
  }
  .card-body {
    display: flex;
    font-size: 35px;
    align-items: center;
    color: #000000;
    font-weight: 500;
  }
  // background-color: red;
}
</style>