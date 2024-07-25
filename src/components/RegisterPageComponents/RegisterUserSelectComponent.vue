<template>
  <div class="container-select-user">
    <h2>Register User Select Page</h2>
    <div class="button-group mt-2">
      <CustomButton class="mr-2" label="Usuario" @onClick="onSelectUser('user')"></CustomButton>
      <CustomButton label="Trabalhador" @onClick="onSelectUser('worker')"></CustomButton>
    </div>
  </div>
</template>

<script>
// Components
import CustomButton from '../../components/forms/CustomButton.vue'

export default {
  components: {
    CustomButton
  },

  methods: {
    onSelectUser(userType) {
      this.$emit('onSelectUser', userType)
    }
  }
}
</script>

<style lang="scss">
.container-select-user {
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