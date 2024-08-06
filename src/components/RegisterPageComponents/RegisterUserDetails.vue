<template>
  <div class="container-register-details-form">
    <div class="box-register">
      <v-form class="container-form">
        <v-container>
          <v-row>
            <v-col>
              <CustomTextField v-model="postcode" label="CEP" type="text"></CustomTextField>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <CustomTextField v-model="city" label="Cidade" type="text"></CustomTextField>
            </v-col>
            <v-col>
              <CustomTextField v-model="state" label="Estado" type="text"></CustomTextField>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <CustomTextField v-model="district" label="Bairro" type="text"></CustomTextField>
            </v-col>
            <v-col>
              <CustomTextField v-model="street" label="Rua" type="email"></CustomTextField>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <CustomTextField v-model="number" label="Numero" type="text"></CustomTextField>
            </v-col>
            <v-col>
              <CustomTextField v-model="complement" label="Complemento" type="text"></CustomTextField>
            </v-col>
          </v-row>
          <CustomButton label="Cadastrar" @onClick="onRegisterDetails"></CustomButton>
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
      postcode: "12324",
      city: "Cidadezinha",
      state: "UF",
      number: "23",
      complement: "aaa",
      district: "Bairro",
      street: "Rua",
    }
  },

  methods: {
    onRegisterDetails() {
      const userDetailsData = {
      postcode: this.postcode,
      city: this.city,
      state: this.state,
      number: this.number,
      district: this.district,
      street: this.street,
      number: this.number,
      complement: this.complement
      }
      this.$emit('onRegisterDetails', userDetailsData)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-register-details-form {
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