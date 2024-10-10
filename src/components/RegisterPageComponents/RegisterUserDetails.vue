<template>
  <div class="container-register-details-form">
    <div class="container-content-details">
      <div class="box-register-details">
        <div class="box-header-details">
          <div class="font-primary">Informações Detalhadas</div>
          <div class="underline-header-details"></div>
        </div>
        <div>
          <v-form class="container-details-form">
            <div class="container-details-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="postcode" label="CEP" type="text" v-mask="['#####-###']" :properties="textFieldProperties" :rules="rulesInputs.postcodeRules"></CustomTextField>
              <CustomButton class="font-primary button-search-cep" @onClick="onGetCepInfo" label="Pesquisar"></CustomButton>
            </div>
            <div class="container-details-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="city" label="Cidade" type="text" :properties="textFieldProperties" :rules="rulesInputs.cityRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="state" label="Estado" placeholder="UF" type="text" :properties="textFieldProperties" :rules="rulesInputs.stateRules"></CustomTextField>
            </div>
            <div class="container-details-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="district" label="Bairro" type="text" :properties="textFieldProperties" :rules="rulesInputs.districtRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="street" label="Rua" type="text" :properties="textFieldProperties" :rules="rulesInputs.streetRules"></CustomTextField>
            </div>
            <div class="container-details-input-group">
              <CustomTextField class="font-primary text-field-input" v-model="number" label="Numero" type="text" :properties="textFieldProperties" :rules="rulesInputs.numberRules"></CustomTextField>
              <CustomTextField class="font-primary text-field-input" v-model="complement" label="Complemento" type="text" :properties="textFieldProperties"></CustomTextField>
            </div>
            <div class="footer-details-form">
              <span class="font-primary message-error" v-if="error">Algo deu errado, Revise os campos!</span>
              <CustomButton class="font-primary button-register-details" @onClick="onRegisterDetails" label="Continuar"></CustomButton>
              <div class="box-footer-details font-primary">
                <span>Ja tem uma conta ?</span>
                <span class="text-register-details" @click="router.push('/login')">Faça Login</span>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CustomTextField from '../forms/CustomTextField.vue'

import { getCepData } from '@/services/utils';

defineProps({
  error: Boolean
})

const router = useRouter()
const emit = defineEmits(['onRegisterUser'])

const textFieldProperties = ref({
  variant: "outlined",
  density: "compact",
  color: "#7810C2",
  'base-color': "#A6A6A6"
})

const rulesInputs = ref({
  postcodeRules: [
    value => {
      if (!value) return 'Campo Obrigatorio'
      if (value && value.length < 8) return 'Campo deve conter 8 Digitos'
      return true
    }
  ],
  cityRules: [
    value => {
      if (!value) return 'Campo Obrigatorio'
      if (/\d/.test(value)) return 'Campo não pode conter numeros'
      return true
    }
  ],
  stateRules: [
  value => {
      if (!value) return 'Campo Obrigatorio'
      if (/\d/.test(value)) return 'Campo não pode conter numeros'
      return true
    }
  ],
  districtRules: [
  value => {
      if (!value) return 'Campo Obrigatorio'
      return true
    }
  ],
  streetRules: [
  value => {
      if (!value) return 'Campo Obrigatorio'
      if (/\d/.test(value)) return 'Campo não pode conter numeros'
      return true
    }
  ],
  numberRules: [
  value => {
      if (!value) return 'Campo Obrigatorio'
      return true
    }
  ],
})

const postcode = ref('')
const city = ref('')
const state = ref('')
const district = ref('')
const street = ref('')
const number = ref('')
const complement = ref('')

const onGetCepInfo = async () => {
  const cepData = await getCepData(postcode.value)
  if (cepData) {
    city.value = cepData.city
    district.value = cepData.neighborhood
    state.value = cepData.state
    street.value = cepData.street

    return
  }
}

const onRegisterDetails = () => {
  const userDetailsData = {
    postcode: postcode.value,
    city: city.value,
    state: state.value,
    number: number.value,
    district: district.value,
    street: street.value,
    number: number.value,
    complement: complement.value
  }

  emit('onRegisterDetails', userDetailsData)
}
// export default {
//   components: {
//   },

//   data() {
//     return {
//       postcode: "12324",
//       city: "Cidadezinha",
//       state: "UF",
//       number: "23",
//       complement: "aaa",
//       district: "Bairro",
//       street: "Rua",
//     }
//   },

//   methods: {
//     onRegisterDetails() {
//       const userDetailsData = {
//       postcode: this.postcode,
//       city: this.city,
//       state: this.state,
//       number: this.number,
//       district: this.district,
//       street: this.street,
//       number: this.number,
//       complement: this.complement
//       }
//       this.$emit('onRegisterDetails', userDetailsData)
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.container-register-details-form {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
  height: 100%;

  .button-search-cep {
    color: white;
    background-color: #0CABA8;
    text-transform: capitalize;
  }

  .container-content-details {
    width: 100%;
    height: 100%;
    .container-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      height: 40px;
      width: 40px;
      border: solid 1px #A6A6A6;
    }
    .box-register-details {
      width: 100%;
      height: 100%;
      background-color: white;
      border-radius: 10px;
      .box-header-details {
        color: black;
        font-size: 18px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        font-weight: 600;
      }
      .underline-header-details {
        width: 80px;
        margin-top: 3px;
        height: 3px;
        background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
      }
    }
    .container-details-form {
      padding: 20px;
      display: flex;
      flex-direction: column;
      .footer-details-form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        .box-footer-details {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000000;
          font-weight: 500;
          font-size: 11px;
          .text-register-details {
            color: #17B7C1;
            text-transform: uppercase;
            font-weight: bold;

            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        .button-register-details {
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
      .container-details-input-group {
        display: flex;
        gap: 10px;
        .text-field-input {
          max-width: 50%;
          color: black;
          margin-bottom: 12px;
        }
      }
    }
  }
}

</style>