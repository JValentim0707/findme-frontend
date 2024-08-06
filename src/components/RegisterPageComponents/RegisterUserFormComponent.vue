<template>
  <div class="container-register-form">
    <div class="box-register">
      <v-form class="container-form">
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
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      firstName: "Test",
      lastName: "Test",
      document: "1234",
      email: "email@test.com",
      password: "12345",
      repeatPassword: "1234",
      phone: "3232132",
      bornDate: "",
    }
  },

  methods: {
    onRegisterUser() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        document: this.document,
        email: this.email,
        password: this.password,
        phone: this.phone,
        bornDate: this.bornDate,
      }
      this.$emit('onRegisterUser', userData)
    }
  }
}
</script>

<style lang="scss">
.container-register-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

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