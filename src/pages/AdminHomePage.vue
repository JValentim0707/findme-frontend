<template>
  <div class="container-admin">
    <h2>Admin Home Page</h2>
    <div>
      <CustomButton label="Users Validation" @onClick="goToUserValidaitonPage"></CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/forms/CustomButton.vue';

export default {
  components: {
    CustomButton
  },

  data() {
    return {
    }
  },

  methods: {
    goToUserValidaitonPage() {
      this.$router.push('/review')
    }
  }
}
</script>

<style lang="scss">
.container-admin {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;
}
.container-button {
  display: flex;
}
</style>