<template>
  <div class="container-register">
    <div class="square-left square-left-posstion"></div>
    <div class="square-down square-down-posstion"></div>
    <div class="square-right"></div>
    <div class="container-back" @click="onBackLogin">
      <v-icon icon="mdi-chevron-left" size="25"></v-icon>
    </div>
    <div class="container-content-register">
      <CustomStepper v-if="step >= 1" class="custom-stepper" :stepperValue="stepperValue"></CustomStepper>
      <RegisterUserSelectComponent v-if="step === 0" @onSelectUSerType="onSelectUSerType"></RegisterUserSelectComponent>
      <RegisterUserFormComponent  v-if="step === 1" @onRegisterUser="onRegisterUser" :error="errorForm"></RegisterUserFormComponent>
      <RegisterEmailValidateComponent v-if="step === 2" @onValidateEmail="onValidateEmail" :userEmail="userCreated.email"> </RegisterEmailValidateComponent>
      <RegisterUserDetailsComponent v-if="step === 3" @onRegisterDetails="onRegisterDetails" :error="errorForm"> </RegisterUserDetailsComponent>
      <RegisterDocumentsComponent v-if="step === 4" @onRegisterDocuments="onRegisterDocuments" :userDataId="userCreated.userId"></RegisterDocumentsComponent>
    </div>
  </div>
</template>

<script setup>

// Functions
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// Components
import CustomStepper from '../components/CustomComponents/CustomStepper.vue'
// import CustomTextField from '../components/forms/CustomTextField.vue'
// import CustomButton from '../components/forms/CustomButton.vue'

// Components Page
import RegisterUserSelectComponent from '../components/RegisterPageComponents/RegisterUserSelectComponent.vue'
import RegisterUserFormComponent from '../components/RegisterPageComponents/RegisterUserFormComponent.vue'
import RegisterEmailValidateComponent from '../components/RegisterPageComponents/RegisterEmailValidateComponent.vue'
import RegisterUserDetailsComponent from '../components/RegisterPageComponents/RegisterUserDetails.vue'
import RegisterDocumentsComponent from '../components/RegisterPageComponents/RegisterDocuments.vue'
 
// // Functions
import { createUser, updateDetails, uploadDocuments } from '../services/user.js'
import { validateEmail } from '../services/auth.js'

const router = useRouter()

const step = ref(0)
const selectedUserType = ref('')
const errorForm = ref(false)
const userCreated = ref({})
const stepperValue = ref([
  {
    title: "Selecione Tipe de Usuario",
    value: 1,
    complete: true
  },
  {
    title: "Informações Basicas",
    value: 2,
    complete: false
  }
])

const onBackLogin = (() => {
  router.push('/login')
})

const onSelectUSerType = ((userType) => {
  selectedUserType.value = userType
  if (userType === 'user') { 
    stepperValue.value.push({
      title: "Validação do Email",
      value: 3,
      complete: false
    })
  } else {
    stepperValue.value.push({
      title: "Informações Avançadas",
      value: 4,
      complete: false
    })
    stepperValue.value.push({
      title: "Envio de Documetos",
      value: 5,
      complete: false
    })
  }
  step.value = 1
})

const onRegisterUser = ( async (userData) => {
  try {
    const { data } = await createUser({...userData, role:  selectedUserType.value})
    userCreated.value = data
    stepperValue.value[1].complete = true
    errorForm.value = false
    step.value = 2
  } catch (error) {
    errorForm.value = true
  }
})

const onValidateEmail = async (code) => {
  const res = await validateEmail({ userId: userCreated.value.userId, email: userCreated.value.email, code: code })
  if (selectedUserType.value === 'user') return router.push('/login')
  step.value = 3
}

const onRegisterDetails = async (userDetailsData) => {
  try {
    const res = await updateDetails({ userId: userCreated.value.userId , ...userDetailsData})
    stepperValue.value[2].complete = true
    step.value = 4
    
  } catch (error) {
    errorForm.value = true
  }
}

const onRegisterDocuments = async (filesData) => {
  const res = await uploadDocuments(filesData)
  router.push('/login')
  
}

</script>

<style lang="scss" scoped>
.container-register {
  display: flex;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(220deg, #7810C2, #0CABA8,);
  justify-content: center;
  flex-direction: column;

  .container-content-register {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .custom-stepper ::v-deep() {
      background-color: white;
      color: #C8C8C8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 70px;
      .v-stepper-header {
        width: 100%;
        padding: 20px;
      }
      .v-stepper-item {
        display: flex;
        align-items: center;
        height: 70px;
        padding: 0px;
        width: auto;
      }
      .v-avatar {
        background-color: #008F8C;
        color: white;
      }
    }

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