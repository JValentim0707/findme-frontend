<template>
  <div class="container-register-documents-form">
    <div class="box-register">
      <v-form class="container-form">
        <v-container>
          <v-row>
            <v-col>
              <v-file-input
                accept="image/*"
                label="Foto do Documento / Frente"
                v-model="documentFront"
              ></v-file-input>
            </v-col>
            <v-col>
              <v-file-input
                accept="image/*"
                label="Foto do Documento / Verso"
                v-model="documentBack"
              ></v-file-input>
            </v-col>
            <v-col>
              <v-file-input
                accept="image/*"
                label="Foto do Rosto / Fundo Branco"
                v-model="documentFace"
              ></v-file-input>
            </v-col>
          </v-row>
          <CustomButton label="Enviar" @onClick="onRegisterDocuments"></CustomButton>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  props: {
    userDataId: String,
  },

  data() {
    return {
      documentFront: null,
      documentBack: null,
      documentFace: null,
      documentsArray: []
    }
  },

  methods: {
    onRegisterDocuments() {

      const formData = new FormData

      formData.append("files", this.documentFront);
      formData.append("files", this.documentBack);
      formData.append("files", this.documentFace);
      formData.append("userId", this.userDataId)

      this.$emit('onRegisterDocuments', formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-register-documents-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .box-register {
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