<template>
  <div class="container-admin">
    <h2>Review Page</h2>
    <div>
      <div v-for="user in userToApproval" class="container-users"> 
        <div class="mr-2 mb-4">{{ user.id }}</div>
        <CustomButton label="Approvar" :onClick="submitAcceptUser('test')"></CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/forms/CustomButton.vue';

import { getAllApproves, acceptedUser } from '@/services/user';

export default {
  components: {
    CustomButton
  },

  data() {
    return {
      userToApproval: []
    }
  },

  async mounted() {
    this.userToApproval = await getAllApproves()
  },

  methods: {
    goToUserValidaitonPage() {
      this.$router.push('/review')
    },
    async submitAcceptUser(approveData) {
      console.log('a', approveData)
      // const res = await acceptedUser(approveData, approveId)
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
.container-users {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-button {
  display: flex;
}
</style>