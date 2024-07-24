<template>
  <div class="container-home">
    <h2>Home Page</h2>
    <CustomButton label="Login Page" @onClick="goToLoginPage"></CustomButton>
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

</style>