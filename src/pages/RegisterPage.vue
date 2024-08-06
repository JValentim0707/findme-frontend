<template>
  <div class="container-register mt-2">
    <h2>Register Page</h2>
    <div v-if="step === 0">
      <RegisterUserSelectComponent @onSelectUser="onSelectUSerType"></RegisterUserSelectComponent>
    </div>
    <div class="container-step1" v-if="step === 1">
      <RegisterUserFormComponent @onRegisterUser="onRegisterUser"></RegisterUserFormComponent>
    </div>
    <div class="container-step1" v-if="step === 2">
      <RegisterEmailValidateComponent @onValidateEmail="onValidateEmail"> </RegisterEmailValidateComponent>
    </div>
    <div class="container-step1" v-if="step === 3">
      <RegisterUserDetailsComponent @onRegisterDetails="onRegisterDetails"> </RegisterUserDetailsComponent>
    </div>
    <div class="container-step1" v-if="step === 4">
      <RegisterDocumentsComponent @onRegisterDocuments="onRegisterDocuments" :userDataId="userCreated.userId"></RegisterDocumentsComponent>
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
import RegisterEmailValidateComponent from '../components/RegisterPageComponents/RegisterEmailValidateComponent.vue'
import RegisterUserDetailsComponent from '../components/RegisterPageComponents/RegisterUserDetails.vue'
import RegisterDocumentsComponent from '../components/RegisterPageComponents/RegisterDocuments.vue'
 
// Functions
import { createUser, updateDetails, uploadDocuments } from '../services/user.js'
import { validateEmail } from '../services/auth.js'

export default {
  components: {
    CustomTextField,
    CustomButton,
    RegisterUserSelectComponent,
    RegisterUserFormComponent,
    RegisterEmailValidateComponent,
    RegisterUserDetailsComponent,
    RegisterDocumentsComponent
  },

  data() {
    return {
      step: 0,
      selectedUserType: null,
      userCreated: null,
    }
  },

  methods: {
    onSelectUSerType(userType){
      this.selectedUserType = userType
      this.step = 1
    },
    async onRegisterUser(userData) {
      const { data } = await createUser({...userData, role: this.selectedUserType})
      this.userCreated = data
      this.step = 2
    },
    async onValidateEmail(code) {
      const res = await validateEmail({ userId: this.userCreated.userId, email: this.userCreated.email, code: code })
      if (this.selectedUserType === 'user') return this.$router.push('/login')
      this.step = 3
    },
    async onRegisterDetails(userDetailsData) {
      const res = await updateDetails({ userId: this.userCreated.userId , ...userDetailsData})
      this.step = 4
    },
    async onRegisterDocuments(filesData) {
      const res = await uploadDocuments(filesData)
      // this.$router.push('/login')
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