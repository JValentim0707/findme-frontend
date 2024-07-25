<template>
  <div class="container-register">
    <h2>Register Page</h2>
    <div class="box-register">
      <v-form class="container-form">
        <v-container>
          <v-row>
            <v-col>
              <CustomTextField v-model="name" label="Nome" type="text"></CustomTextField>
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
          <CustomButton label="Cadastrar"></CustomButton>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>

// Components
import CustomTextField from '../components/forms/CustomTextField.vue'
import CustomButton from '../components/forms/CustomButton.vue'

// Functions

export default {
  components: {
    CustomTextField,
    CustomButton
  },

  data() {
    return {
      name: "",
      document: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
      bornDate: "",
    }
  },

  methods: {
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

  .box-register {
    display: flex;
    width: 60%;
    height: 800px;
    background-color: rgba(255, 255, 255, 0.438);
    border-radius: 10px;
  }
}

.container-form {
  display: flex;
  width: 100%;
}
</style>