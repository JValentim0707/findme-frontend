<template>
  <div class="container-register-form">
    <div class="box-code">
      <v-form class="container-form">
        <v-container>
          <v-row>
            <v-col>
              <CustomTextField v-model="code" label="Codigo" type="text"></CustomTextField>
            </v-col>
          </v-row>
          <CustomButton label="Enviar" @onClick="onValidateEmail"></CustomButton>
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
      code: "",
    }
  },

  methods: {
    onValidateEmail() {
      this.$emit('onValidateEmail', this.code)
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

  .box-code {
    display: flex;
    width: 60%;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.438);
    border-radius: 10px;
  }
}

.container-form {
  display: flex;
  width: 100%;
}
</style>