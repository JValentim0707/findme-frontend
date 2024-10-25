<template>
  <div class="container-register-documents-form">
    <div class="container-content-documents">
      <div class="box-register-documents">
        <div class="box-header-documents">
          <div class="font-primary">Envio de Documentos</div>
          <div class="underline-header-documents"></div>
        </div>
        <div>
          <v-form class="container-documents-form">
            <div class="container-documents-input-group">
              <CustomFileInput class="custom-input-file" v-model="documentFront" acceptOptions="image/*" label="Foto do Documento / Frente" :fileInputOptions="fileInputProperties" :rules="rulesInputs.inputFileRules"></CustomFileInput>
              <CustomFileInput class="custom-input-file" v-model="documentBack" acceptOptions="image/*" label="Foto do Documento / Verso" :fileInputOptions="fileInputProperties" :rules="rulesInputs.inputFileRules"></CustomFileInput>
            </div>
            <div class="container-documents-input-group">
              <CustomFileInput class="custom-input-file" v-model="documentsArray" acceptOptions="image/*" label="Foto do Rosto / Fundo Branco" :fileInputOptions="fileInputProperties" :rules="rulesInputs.inputFileRules"></CustomFileInput>
            </div>
            <div class="footer-documents-form">
              <span class="font-primary message-error" v-if="error">Algo deu errado, Revise os campos!</span>
              <CustomButton class="font-primary button-register-documents" @onClick="onRegisterDocuments" label="Finalizar"></CustomButton>
              <div class="box-footer-documents font-primary">
                <span>Ja tem uma conta ?</span>
                <span class="text-register-documents" @click="router.push('/login')">Faça Login</span>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import CustomFileInput from '../CustomComponents/CustomFileInput.vue';
import CustomButton from '../CustomComponents/CustomButton.vue'

const props = defineProps({
  userDataId: String,
  error: Boolean
})

const router = useRouter()
const emit = defineEmits(['onRegisterDocuments'])

const fileInputProperties = ref({
  color: "#7810C2",
  'base-color': "#A6A6A6"
})

const documentFront = ref(null)
const documentBack = ref(null)
const documentsArray = ref(null)

const rulesInputs = ref({
  inputFileRules: [
    value => {
      if (!value) return 'Campo Obrigatorio'
      return true
    }
  ],
})

const onRegisterDocuments = () => {
  const formData = new FormData

  formData.append("files", documentFront.value);
  formData.append("files", documentBack.value);
  formData.append("files", documentsArray.value);

  formData.append("userId", props.userDataId)

  emit('onRegisterDocuments', formData)
  
}

</script>

<style lang="scss" scoped>
.container-register-documents-form {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
  height: 100%;

  .container-content-documents {
    width: 100%;
    height: 100%;
    .box-register-documents {
      width: 100%;
      height: 100%;
      background-color: white;
      border-radius: 10px;
      .box-header-documents {
        color: black;
        font-size: 18px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        font-weight: 600;
        .underline-header-documents {
          width: 100px;
          margin-top: 3px;
          height: 3px;
          background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
        }
      }
      .container-documents-form {
        padding: 20px;
        display: flex;
        flex-direction: column;
        .container-documents-input-group {
          display: flex;
          gap: 10px;
          .custom-input-file {
            color: black;
          }
        }
        .footer-documents-form {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          flex-direction: column;
          .box-footer-documents {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #000000;
            font-weight: 500;
            font-size: 11px;
            .text-register-documents {
              color: #17B7C1;
              text-transform: uppercase;
              font-weight: bold;

              &:hover {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
          .button-register-documents {
            background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
            height: 35px;
            font-weight: bold;
            width: 40%;
            border-radius: 10px;
            text-transform: capitalize;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .message-error {
            color: #CF6679;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>