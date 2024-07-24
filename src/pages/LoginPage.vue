<template>
  <div class="container-login">
    <div class="box-login">
      <CustomTextField v-model="email" label="Email" type="email"></CustomTextField>
      <CustomTextField v-model="password" label="Password" type="password"></CustomTextField>
      <CustomButton label="Logar" @onClick="loginOnSystem"></CustomButton>
    </div>
  </div>
</template>

<script>

// Components
import CustomTextField from '../components/forms/CustomTextField.vue'
import CustomButton from '../components/forms/CustomButton.vue'

// Functions
import { login } from '../services/auth.js'

export default {
  components: {
    CustomTextField,
    CustomButton
  },

  data() {
    return {
      email: '',
      password: '',
      userLoginPage: {
        admin: {
          name: 'AdminHomePage',
          path: '/adminHome'
        },
        worker: {
          name: 'WorkerHomePage',
          path: '/workerHome'
        },
        user: {
          name: 'HomePage',
          path: '/'
        }
      }
    }
  },

  methods: {
    async loginOnSystem () {
      const { user, accessToken } = await login({ email: this.email, password: this.password })

      window.localStorage.setItem('jwtToken', accessToken);

      this.$router.push(this.userLoginPage[user.role].path)

      this.email = null
      this.password = null
    }
  }
}
</script>

<style lang="scss">
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%
}
.box-login {
  background-color: rgba(0, 0, 0, 0.685);
  border-radius: 10px;
  padding: 20px;
  width: 30%;
}
</style>