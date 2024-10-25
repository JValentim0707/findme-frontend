<template>
  <div class="container-register-form">
    <div class="container-content-register">
      <div class="box-register">
        <div class="box-header-register">
          <div class="font-primary">Criar Conta</div>
          <div class="underline-header"></div>
        </div>
        <div>
          <v-form class="container-form" ref="formRegister">
            <div class="container-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="firstName" label="Nome" type="text" :properties="textFieldProperties" :rules="rulesInputs.namedRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="lastName" label="Sobrenome" type="text" :properties="textFieldProperties" :rules="rulesInputs.namedRules"></CustomTextField>
            </div>
            <div class="container-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="document" label="CPF" type="text" v-mask="['###.###.###-##']" :properties="textFieldProperties" :rules="rulesInputs.documentRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="email" label="Email" type="email" :properties="textFieldProperties" :rules="rulesInputs.emailRules"></CustomTextField>
            </div>
            <div class="container-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="password" label="Senha" type="password" :properties="textFieldProperties" :rules="rulesInputs.passwordRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="repeatPassword" label="Repita Senha" type="password" :properties="textFieldProperties" :rules="rulesInputs.passwordRepeatRules"></CustomTextField>
            </div>
            <div class="container-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="phone" label="Telefone" type="text" v-mask="['(##) ####-####', '(##) #####-####']" :properties="textFieldProperties" :rules="rulesInputs.phoneRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="bornDate" label="Data de Nascimento" type="date" :properties="textFieldProperties" :rules="rulesInputs.dateRules"></CustomTextField>
            </div>
            <div class="footer-form">
              <span class="font-primary message-error" v-if="error">Algo deu errado, Revise os campos!</span>
              <CustomButton class="font-primary button-register" @onClick="onRegisterUser" label="Continuar"></CustomButton>
              <div class="box-footer font-primary">
                <span>Ja tem uma conta ?</span>
                <span class="text-register" @click="router.push('/login')">Faça Login</span>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Functions
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Components
import CustomTextField from '../forms/CustomTextField.vue'
import CustomButton from '../CustomComponents/CustomButton.vue';

const router = useRouter()
const emit = defineEmits(['onRegisterUser'])

// Refs
const formRegister = ref(null)

defineProps({
  error: Boolean
})

const textFieldProperties = ref({
  variant: "outlined",
  density: "compact",
  color: "#7810C2",
  'base-color': "#A6A6A6"
})

const rulesInputs = ref({
  namedRules: [
    value => {
      if (!value) return 'Campo Obrigatorio'
      if (/\d/.test(value)) return 'Campo não pode conter numeros'
      return true
    }
  ],
  documentRules: [
    value => {
      if (!value) return 'Campo Obrigatorio'
      if (value && value.length < 8) return 'CPF deve conter 8 digitos'
      
    }
  ],
  emailRules: [
    value => { 
      if (!value) return 'Campo Obrigatorio'
      if (value && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return 'Digite um email valido'

      return true
    }
  ],
  passwordRules: [
    value => { 
      if (!value) return 'Campo obrigatorio'
      if (value && !/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value)) return 'Senha deve conter letras e numeros'
      return true
    }
  ],
  passwordRepeatRules: [
    value => { 
      if (!value) return 'Campo obrigatorio'
      if (value && !/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value)) return 'Senha deve conter letras e numeros'
      if (value && password.value !== repeatPassword.value) return 'Senhas devem ser Iguais'
      return true
    }
  ],
  phoneRules: [
    value => {
      if (!value) return 'Campo obrigatorio'
      if (value && value.length < 9) return 'Telefone deve conter 9 digitos'
      return true
    }
  ],
  dateRules: [
    value => {
      if (!value) return 'Campo obrigatorio'
      return true
    }
  ]
})

const firstName = ref('')
const lastName = ref('')
const document = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')
const phone = ref('')
const bornDate = ref('')

const onRegisterUser = async () => {
  const { valid } = await formRegister.value.validate()

  if (!valid) return

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    document: document.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    bornDate: bornDate.value,
  }

  emit('onRegisterUser', userData)
}

</script>

<style lang="scss" scoped>
.container-register-form {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
  height: 100%;
  .container-content-register  {
    width: 100%;
    height: 100%;
    .custom-stepper ::v-deep() {
      background-color: white;
      color: #C8C8C8;
      .v-avatar {
        background-color: #008F8C;
        color: white;
      }
    }
    .box-header-register {
      color: black;
      font-size: 18px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      font-weight: 600;
    }
    .underline-header {
      width: 80px;
      margin-top: 3px;
      height: 3px;
      background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
    }
  }
  .box-register ::v-deep(){
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    .container-form {
      padding: 20px;
      display: flex;
      flex-direction: column;
      .footer-form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
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
        .button-register {
          background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
          height: 35px;
          font-weight: bold;
          width: 40%;
          border-radius: 10px;
          text-transform: capitalize;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
      .text-field-input {
        max-width: 50%;
        color: black;
        margin-bottom: 12px;
      }
    }
    .container-input-group {
      display: flex;
      gap: 10px;
    }
  }
  .message-error {
    color: #CF6679;
    font-size: 12px;
  }
}
</style>