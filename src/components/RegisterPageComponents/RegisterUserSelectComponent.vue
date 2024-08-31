<template>
  <div class="container-select-user">
    <div class="box-select-type">
      <div class="box-select-type-header font-primary">
        <span>Selecione o Tipo de Usuario ?</span>
        <div class="underline-title"></div>
      </div>
      <div class="box-select-type-content">
        <div class="box-select-type-container">
          <div class="option-content" :class="{'option-content-active': userType === 'user'}" @click="onSelectUser('user')">
            <div class="option-select"><v-icon icon="mdi-account" color="#C8C8C8" size="120"></v-icon></div>
            <span class="font-primary">Usuario</span>
          </div>
          <div class="option-content" :class="{'option-content-active': userType === 'worker'}" @click="onSelectUser('worker')">
            <div class="option-select"><v-icon icon="mdi-tools" color="#C8C8C8" size="120"></v-icon></div>
            <span class="font-primary">Trabalhador</span>
          </div>
        </div>
        <div class="container-error font-primary" v-if="error">
          <v-icon class="mr-2" icon="mdi-alert-circle"></v-icon>
          <span>Por favor selecione um tipo de usuario !</span>
        </div>
        <CustomButton class="font-primary button-next" label="Continuar" @onClick="onNextStep"></CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
// Functions
import { ref } from 'vue';

// Components
import CustomButton from '../forms/CustomButton.vue';

const emit = defineEmits(['onSelectUSerType'])

const userType = ref('')
const error = ref(false)

const onSelectUser = ((type) => {
  userType.value = type
})
const onNextStep = (() => {
  if (userType.value === '') return error.value = true
  emit('onSelectUSerType', userType.value)
})

</script>

<style lang="scss" scoped>
.container-select-user {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .box-select-type {
    width: 30%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 500px;
    border-radius: 10px;
    min-width: 800px;
    max-width: 900px;
    .box-select-type-header {
      color: black;
      font-size: 18px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      font-weight: 600;
    }
    .underline-title {
      width: 130px;
      height: 3px;
      background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
    }
    .box-select-type-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      .box-select-type-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
      .option-content {
        display: flex;
        flex-direction: column;
        color: #C8C8C8;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        &:hover {
          cursor: pointer;
          color: #008F8C;
          i {
            color: #008F8C !important;
          }
          .option-select {
            border-color: #008F8C;
          }
        }
        .option-select {
          border: solid 2px #C8C8C8;
          border-radius: 100%;
          padding: 30px;
          margin-bottom: 20px;
        }
      }
      .container-error {
        color: #d10000;
      }
      .button-next {
        background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
        height: 35px;
        font-weight: bold;
        width: 200px;
        text-transform: capitalize;
      }

    }
  }
  .option-content-active {
    color: #008F8C !important;
    .option-select {
      border-color: #008F8C !important;
    }
    i {
      color: #008F8C !important;
    }
  }
}

</style>