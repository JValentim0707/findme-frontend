<template>
  <div>
    <CustomTextField v-model="email" label="Email" type="email"></CustomTextField>
    <CustomTextField v-model="password" label="Password" type="text"></CustomTextField>
    <CustomButton label="Logar" @onClick="loginOnSystem"></CustomButton>
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
      password: ''
    }
  },

  methods: {
    async loginOnSystem () {
      const { user, accessToken } = await login({ email: this.email, password: this.password })

      window.localStorage.setItem('jwtToken', accessToken);

      this.email = null
      this.password = null
    }
  }
}
</script>