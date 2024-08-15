<template>
  <div class="container-admin">
    <CardStatistic 
      v-for="cardData in cardStatisticData" 
      :title="cardData.title" 
      :icon="cardData.icon" 
      :iconColor="cardData.iconColor"
      :iconSize="cardData.iconSize"
      :value="cardData.value"
    ></CardStatistic>
    <!-- <h2>Admin Home Page</h2>
    <div>
      <CustomButton label="Users Validation" @onClick="goToUserValidaitonPage"></CustomButton>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { getAllUsers } from '@/services/user';

import CardStatistic from '@/components/AdminPageComponents/CardStatistic.vue';
// import CustomButton from '@/components/forms/CustomButton.vue';

const cardStatisticData = ref([])

onMounted(async () => {
  const allUsers = await getAllUsers()
  cardStatisticData.value.push({
    title: 'Número de Usuários',
    icon: 'mdi-account-group',
    iconColor: '#008F8C',
    iconSize: '25',
    value: allUsers.data.filter((x) => x.role === 'user').length
  })
  cardStatisticData.value.push({
    title: 'Número de Trabalhadores',
    icon: 'mdi-tools',
    iconColor: '#008F8C',
    iconSize: '25',
    value: allUsers.data.filter((x) => x.role === 'worker').length
  })
})

// export default {
//   components: {
//     CustomButton
//   },

//   data() {
//     return {
//     }
//   },

//   methods: {
//     goToUserValidaitonPage() {
//       this.$router.push('/review')
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.container-admin {
  display: flex;
  // height: 100%;
  // width: 100%;
  // background-color: white;
}
</style>