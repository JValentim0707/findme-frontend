<template>
  <div class="container-register mt-2">
    <h2>Register Page</h2>
    <div v-if="step === 0">
      <RegisterUserSelectComponent @onSelectUser="onSelectUSerType"></RegisterUserSelectComponent>
    </div>
    <div class="container-step1" v-if="step === 1">
      <RegisterUserFormComponent @onRegisterUser="onRegisterUser"></RegisterUserFormComponent>
    </div>
  </div>
</template>

<script>

// Components
import CustomTextField from '../components/forms/CustomTextField.vue'
import CustomButton from '../components/forms/CustomButton.vue'

// Components Page
import RegisterUserSelectComponent from '../components/RegisterPageComponents/RegisterUserSelectComponent.vue'
import RegisterUserFormComponent from '../components/RegisterPageComponents/RegisterUserFormComponent.vue'
 
// Functions
import { createUser } from '../services/user.js'

export default {
  components: {
    CustomTextField,
    CustomButton,
    RegisterUserSelectComponent,
    RegisterUserFormComponent
  },

  data() {
    return {
      step: 0,
      selectedUserType: null,
    }
  },

  methods: {
    onSelectUSerType(userType){
      this.selectedUserType = userType
      this.step = 1
    },
    async onRegisterUser(userData) {
      await createUser({...userData, role: this.selectedUserType})
    }
  }
}
</script>

<style lang="scss">
.container-register {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;
}

.container-step1 {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>