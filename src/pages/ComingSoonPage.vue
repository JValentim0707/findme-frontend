<template>
  <div class="container-soon">
    <div class="font-primary container-soon-content">
      <v-icon class="mb-3" icon="mdi-clock" size="50"></v-icon>
      <div>Estamos Trabalhando Aqui !</div>
      <div>Volte em Breve !</div>
      <CustomButton class="font-primary button-soon" label="Voltar" @onClick="router.go(-1)"></CustomButton>
    </div>
  </div>
</template>
<script setup>
import CustomButton from '@/components/CustomComponents/CustomButton.vue';
import { useRouter } from 'vue-router'

const router = useRouter()


</script>
<style lang="scss" scoped>
  .container-soon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(220deg, #0CABA8, #7810C2 );
    width: 100%;
    height: 100%;
    .container-soon-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .button-soon {
    margin-top: 10px;
    background-color: white;
    color: black;
    font-size: 15px;
    text-transform: capitalize;
  }
</style>