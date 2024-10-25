<template>
  <div class="container-register-form">
    <div class="box-code">
      <div class="header-email-validation">
        <div>
          <div class="box-header-title font-primary">Validação de Email</div>
          <div class="underline-header"></div>
        </div>
      </div>
      <div class="font-primary info-email">OBS: Enviamos o codigo para o email: <span class="info-email-highlight">{{ userEmail }}</span></div>
      <v-form class="container-form">
        <div class="container-input-code">
          <CustomOtpInput v-model="code" class="custom-otp-input font-primary" :otpInputProps="otpInputProperties"></CustomOtpInput>
        </div>
          <CustomButton class="font-primary button-validation-email" label="Validar" @onClick="onValidateEmail"></CustomButton>
      </v-form>
      <div class="box-footer font-primary">
        <span>Não Recebeu o Codigo ?</span>
        <span class="text-register" @click="router.push('/login')">Reenviar</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Functions
import { ref } from 'vue'
// Components
import CustomOtpInput from '../CustomComponents/CustomOtpInput.vue'
import CustomButton from '../CustomComponents/CustomButton.vue';

const emit = defineEmits(['onValidateEmail'])

defineProps({
  userEmail: String
})

const otpInputProperties = ref({
  length: 4,
  'base-color': '#C8C8C8',
})

const code = ref('')

const onValidateEmail = () => {
  emit('onValidateEmail', code.value)
}
</script>

<style lang="scss" scoped>
.container-register-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .box-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    font-weight: 500;
    font-size: 11px;
    .text-register {
      color: #17B7C1;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .box-code {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    height: 300px;
    background-color: white;
    border-radius: 10px;

    .info-email {
      font-size: 14px;
      padding-left: 20px;
      color: #c8c8c8;
      .info-email-highlight {
        font-weight: 500;
        color: black;
      }
    }

    .header-email-validation {
      width: 100%;
      color: black;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      font-weight: 600;
      padding: 20px;
      padding-bottom: 10px;
      .underline-header {
        width: 80px;
        margin-top: 3px;
        height: 3px;
        background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
      }
    }
  }
}

.container-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  .button-validation-email {
    background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
    height: 35px;
    font-weight: bold;
    width: 40%;
    border-radius: 5px;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container-input-code {
    border-radius: 5px;
    width: 60%;
    .custom-otp-input {
      color: black;
    }
  }
}
</style>