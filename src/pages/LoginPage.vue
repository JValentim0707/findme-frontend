<template>
  <div class="container-login">
    <div class="square-left"></div>
    <div class="square-down"></div>
    <div class="square-right"></div>
    <div class="box-login">
      <span class="font-primary title-login">Login</span>
      <v-form class="form-login">
        <CustomTextField 
          v-model="email" 
          class="input-login"
          :error="error"
          :properties="textFieldProperties" 
          label="Email" 
          placeholder="Digite seu Email" 
          prepend-inner-icon='mdi-account' 
          type="email"
        ></CustomTextField>
        <CustomTextField v-model="password" class="input-login" :error="error" :properties="textFieldProperties" label="Senha" placeholder="Digite sua Senha" prepend-inner-icon='mdi-lock' type="password"></CustomTextField>
        <span v-if="error" class="message-error font-primary">Usuário ou senha invalido !</span>
        <CustomButton class="font-primary button-login" label="Entrar" @onClick="loginSubmit"></CustomButton>
      </v-form>
      <div class="box-footer font-primary">
        <span>Não tem uma conta?</span>
        <span class="text-register" @click="router.push('/register')">Cadastre-se</span>
      </div>
    </div>
  </div>
</template>

<script setup>

// Components
import CustomTextField from '../components/forms/CustomTextField.vue'
import CustomButton from '../components/forms/CustomButton.vue'

// // Functions
import { loginOnSystem } from '../services/auth.js'
import { useRouter } from 'vue-router'

import { ref } from 'vue'

const router = useRouter()

const textFieldProperties = ref({
  label: 'Test',
  variant: "underlined",
  width: '100%',
  color: '#a3a3a3',
  'base-color': "#a3a3a3",
  'prepend-inner-icon': 'mdi-account'
})

const email = ref('')
const error = ref(false)
const password = ref('')
const userLoginPage = ref({
  admin: { name: 'AdminHomePage', path: '/adminHome' },
  worker: { name: 'WorkerHomePage', path: '/workerHome' },
  user: { name: 'HomePage', path: '/' }
})

const loginSubmit = async () => {
  try {
    const { user, accessToken } = await loginOnSystem({ email: email.value, password: password.value })
  
    window.localStorage.setItem('jwtToken', accessToken);
  
    router.push(userLoginPage.value[user.role].path)
  } catch (err) {
    error.value = true
    console.log('chegamos aq')
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

.container-login {
  background-image: linear-gradient(220deg, #7810C2, #0CABA8,);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
// background-color: darkblue
  .square-left {
    position: absolute;
    border-top: 200px solid transparent;
    border-bottom: 200px solid transparent;
    border-left: 200px solid rgba(245, 245, 245, 0.651);
    left: 0px;
    top: 0px;
  }
  .square-down {
    position: absolute;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent; 
    border-bottom: 200px solid rgba(245, 245, 245, 0.651);
    bottom: 0px;
    left: 300px;
  }
  .square-right {
    position: absolute;
    border-top: 200px solid transparent;
    border-bottom: 200px solid transparent;
    border-right: 200px solid rgba(245, 245, 245, 0.651);
    top: 100px;
    right: 0px;
  }
}
.box-login {
  background-color: white;
  height: 70%;
  border-radius: 10px;
  width: 20%;
  min-width: 380px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 40px;
  .title-login {
    color: #000000;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .form-login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
  }
  .input-login ::v-deep() {
    i {
      color: #a3a3a3;
      &:before {
        font-size: 18px;
      }
    }
    input {
      color: black;
      font-size: 12px;
    }
    label {
      color: #a3a3a3;
      // font-size: 16px; 
      font-family: "Bai Jamjuree", sans-serif;
      font-style: normal;
    }
  }
  .button-login {
    background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
    height: 35px;
    font-weight: bold;
    width: 70%;
    border-radius: 20px;
    text-transform: capitalize;
    margin-top: 20px;
  }
  .message-error {
    color: #CF6679;
    font-size: 12px;
  }
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
}
</style>