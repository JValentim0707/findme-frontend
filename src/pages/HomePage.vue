<template>
  <div class="container-home">
    <h2>Home Page</h2>
    <div class="button-group mt-2">
      <CustomButton class="mr-2" label="Login Page" @onClick="goToLoginPage"></CustomButton>
      <CustomButton label="Register Page" @onClick="goToRegisterPage"></CustomButton>
    </div>
  </div>
</template>

<script>
// Components
import CustomButton from '../components/forms/CustomButton.vue'

export default {
  components: {
    CustomButton
  },

  methods: {
    goToLoginPage() {
      this.$router.push('/login')
    },
    goToRegisterPage(){
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss">
.container-home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.button-group {
  display: flex;
}

</style>