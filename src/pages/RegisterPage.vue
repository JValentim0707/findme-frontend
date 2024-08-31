<template>
  <div class="container-register">
    <div class="square-left square-left-posstion"></div>
    <div class="square-down square-down-posstion"></div>
    <div class="square-right"></div>
    <div class="container-back" @click="onBackLogin">
      <v-icon icon="mdi-chevron-left" size="25"></v-icon>
    </div>
      <RegisterUserSelectComponent v-if="step === 0" @onSelectUSerType="onSelectUSerType"></RegisterUserSelectComponent>
      <RegisterUserFormComponent  v-if="step === 1" @onRegisterUser="onRegisterUser"></RegisterUserFormComponent>

    <div class="container-step1" v-if="step === 1">
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

<script setup>

// Functions
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// Components
// import CustomTextField from '../components/forms/CustomTextField.vue'
// import CustomButton from '../components/forms/CustomButton.vue'

// Components Page
import RegisterUserSelectComponent from '../components/RegisterPageComponents/RegisterUserSelectComponent.vue'
import RegisterUserFormComponent from '../components/RegisterPageComponents/RegisterUserFormComponent.vue'
import RegisterEmailValidateComponent from '../components/RegisterPageComponents/RegisterEmailValidateComponent.vue'
import RegisterUserDetailsComponent from '../components/RegisterPageComponents/RegisterUserDetails.vue'
import RegisterDocumentsComponent from '../components/RegisterPageComponents/RegisterDocuments.vue'
 
// // Functions
// import { createUser, updateDetails, uploadDocuments } from '../services/user.js'
// import { validateEmail } from '../services/auth.js'
const router = useRouter()

const step = ref(0)
const selectedUserType = ref('')

const onBackLogin = (() => {
  router.push('/login')
})

const onSelectUSerType = ((userType) => {
  selectedUserType.value = userType
  step.value = 1
})

// export default {
//   components: {
//     CustomTextField,
//     CustomButton,
//     RegisterUserSelectComponent,
//     RegisterUserFormComponent,
//     RegisterEmailValidateComponent,
//     RegisterUserDetailsComponent,
//     RegisterDocumentsComponent
//   },

//   data() {
//     return {
//       step: 0,
//       selectedUserType: null,
//       userCreated: null,
//     }
//   },

  // methods: {
  //   onSelectUSerType(userType){
  //     this.selectedUserType = userType
  //     this.step = 1
  //   },
  //   async onRegisterUser(userData) {
  //     const { data } = await createUser({...userData, role: this.selectedUserType})
  //     this.userCreated = data
  //     this.step = 2
  //   },
  //   async onValidateEmail(code) {
  //     const res = await validateEmail({ userId: this.userCreated.userId, email: this.userCreated.email, code: code })
  //     if (this.selectedUserType === 'user') return this.$router.push('/login')
  //     this.step = 3
  //   },
  //   async onRegisterDetails(userDetailsData) {
  //     const res = await updateDetails({ userId: this.userCreated.userId , ...userDetailsData})
  //     this.step = 4
  //   },
  //   async onRegisterDocuments(filesData) {
  //     const res = await uploadDocuments(filesData)
  //     // this.$router.push('/login')
  //   }
  // }
</script>

<style lang="scss" scoped>
.container-register {
  display: flex;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(220deg, #7810C2, #0CABA8,);
  justify-content: center;
  flex-direction: column;

  .square-left-posstion {
    left: 0px;
    top: 200px !important;
  }
  .square-down-posstion {
    bottom: 0px;
    left: 1000px !important;
  }
  .container-back {
    width: 35px;
    height: 35px;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    border: solid 2px #ffffff;
    border-radius: 100%;
    left: 20px;
    top: 20px;
    &:hover {
      background-color: #ffffff4d;
      cursor: pointer;
    }
  }
}

.container-step1 {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>