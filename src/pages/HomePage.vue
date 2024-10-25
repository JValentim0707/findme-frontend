<template>
  <div class="container-home">
    <div class="first-container">
      <div class="container-menu">
        <div class="container-menu-group">
          <div class="logo-project">FindMe</div>
          <div class="font-primary menu-item" @click="router.push('/soon')">Encontrar Mão de Obra</div>
          <div class="font-primary menu-item" @click="router.push('/soon')">Trabalhar</div>
          <div class="font-primary menu-item" @click="router.push('/soon')">Sobre</div>
        </div>
        <div>
          <CustomButton class="font-primary button-login" label="Login" @onClick="router.push('/login')" :buttondProperties="buttondProperties"/>
          <CustomButton class="font-primary button-register" label="Cadastre-se" @onClick="router.push('/register')"/>
        </div>
      </div>
      <div class="first-container-content">
        <div class="card-info">
          <div class="font-primary card-title">Procurando alguém para resolver seus problemas ?</div>
          <div class="font-primary card-subtitle">nós ajudaremos achar a melhor opção!</div>
          <CustomButton class="font-primary button-card" label="Cadastre-se" @onClick="router.push('/register')"></CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Components
import CustomButton from '../components/CustomComponents/CustomButton.vue'

// Utils
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const buttondProperties = ref({
  'prepend-icon': 'mdi-account'
})


// export default {
//   components: {
//     CustomButton
//   },

//   methods: {
//     goToLoginPage() {
//       this.$router.push('/login')
//     },
//     goToRegisterPage(){
//       this.$router.push('/register')
//     }
//   }
// }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Bowlby+One+SC&display=swap');

.container-home {
  display: flex;
  width: 100%;
  height: 100%;
  .first-container {
    width: 100%;
    height: 75%;
    background-image: linear-gradient(220deg, #0CABA8, #7810C2 );
    .container-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      width: 100%;
      height: 70px;
      .container-menu-group {
        display: flex;
        align-items: center;
      }
      .button-login {
        height: 30px;
        color: white;
        text-transform: capitalize;
        background-color: transparent;
        box-shadow: none;
      }
      .button-register {
        background-color: white;
        color: #0CABA8;
        text-transform: capitalize;
        height: 30px;
        margin-left: 20px;
      }
      .menu-item {
        margin-left: 15px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .logo-project {
        font-family: "Bowlby One SC", sans-serif;
        font-size: 20px;
      }
    }

    .first-container-content {
      display: flex;
      width: 100%;
      height: calc(100% - 70px);
      align-items: center;
      .card-info {
        background-color: white;
        width: 50%;
        max-width: 800px;
        min-width: 650px;
        border-radius: 10px;
        max-height: 470px;
        height: 60%;
        margin-left: 50px;
        padding: 40px 50px;
        .card-title {
          color: black;
          font-weight: 500;
          font-size: 40px;
        }
        .card-subtitle {
          color: #0CABA8;
          font-size: 25px;
          font-weight: 500;
        }
        .button-card {
          margin-top: 40px;
          text-transform: capitalize;
          background-image: linear-gradient(90deg, #7810C2, #0CABA8,);
        }
      }
    }
  }
}

.button-group {
  display: flex;
}

</style>