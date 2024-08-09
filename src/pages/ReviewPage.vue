<template>
  <div class="container-admin">
    <h2>Review Page</h2>
    <div>
      <div v-for="user in userToApproval" class="container-users"> 
        <div class="mr-2 mb-4">{{ user.id }}</div>
        <v-btn @click="submitAcceptUser({ userId: user.id, status: 'approved' })"> Approvado </v-btn>
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
      const res = await acceptedUser({ userApprovesId: approveData.userId, status: approveData.status },)
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