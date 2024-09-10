<template>
  <div class="container-register-form">
    <div class="container-content-register">
      <CustomStepper class="custom-stepper" :stepperValue="stepperValue"></CustomStepper>
      <div class="box-register">
        <div class="box-header-register">
          <div class="box-header-title font-primary">Criar Conta</div>
          <div class="underline-header"></div>
        </div>
        <div>
        <v-form>
          <div class="container-input-group">
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
          </div>
          <div class="container-input-group">
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
          </div>
          <div class="container-input-group">
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
          </div>
          <div class="container-input-group">
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
            <CustomTextField class="text-field-input" :properties="textFieldProperties"></CustomTextField>
          </div>
        </v-form>
      </div>
        <!-- <v-form class="container-form">
          <v-container>
            <v-row>
              <v-col>
                <CustomTextField v-model="firstName" label="First Name" type="text"></CustomTextField>
              </v-col>
              <v-col>
                <CustomTextField v-model="lastName" label="Last Name" type="text"></CustomTextField>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CustomTextField v-model="document" label="CPF" type="text"></CustomTextField>
              </v-col>
              <v-col>
                <CustomTextField v-model="email" label="Email" type="email"></CustomTextField>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CustomTextField v-model="password" label="Senha" type="password"></CustomTextField>
              </v-col>
              <v-col>
                <CustomTextField v-model="repeatPassword" label="Repita Senha" type="password"></CustomTextField>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CustomTextField v-model="phone" label="Celular" type="text"></CustomTextField>
              </v-col>
              <v-col>
                <CustomTextField v-model="bornDate" label="Data de Nascimento" type="date"></CustomTextField>
              </v-col>
            </v-row>
            <CustomButton label="Cadastrar" @onClick="onRegisterUser"></CustomButton>
          </v-container>
        </v-form> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// Functions
import { ref } from 'vue'

// Components
import CustomStepper from '../CustomComponents/CustomStepper.vue';
import CustomTextField from '../forms/CustomTextField.vue'

const textFieldProperties = ref({
  variant: "outlined",
  color: "blue",
  'base-color': "#C8C8C8"
})

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

// export default {
//   components: {
//   },

//   data() {
//     return {
//       firstName: "Test",
//       lastName: "Test",
//       document: "1234",
//       email: "email@test.com",
//       password: "12345",
//       repeatPassword: "1234",
//       phone: "3232132",
//       bornDate: "",
//     }
//   },

//   methods: {
//     onRegisterUser() {
//       const userData = {
//         firstName: this.firstName,
//         lastName: this.lastName,
//         document: this.document,
//         email: this.email,
//         password: this.password,
//         phone: this.phone,
//         bornDate: this.bornDate,
//       }
//       this.$emit('onRegisterUser', userData)
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.container-register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .container-content-register  {
    width: 40%;
    height: 600px;
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
  .box-register {
    width: 100%;
    // position: absolute;
    // margin-top: 40px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    .container-input-group {
      display: flex;
      gap: 10px;
    }
  }
}
</style>