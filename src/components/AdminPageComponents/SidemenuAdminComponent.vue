<template>
  <CustomNavigationDrawer 
    class="sidemenu-admin-container" 
    v-model="drawerAdmin" 
    :rail="drawerAdminRail" 
    :navigationDrawerProps="drawerAdminProps"
  >
    <template v-slot:header_drawer>
      <div class="sidemenu-admin-header">
        <div>FindMe</div>
      </div>
    </template>
    <template v-slot:divider_drawer>
      <div class="font-primary sidemenu-admin-divider">Menu</div>
    </template>
    <template v-slot:items_drawer>
      <v-list-item 
        v-for="itemAdmin in drawerAdminItems"
        :class="{'sidemenu-item-active': itemAdmin.value === drawerAdminValue }"
        content-class="drawer-item" 
        :prepend-icon="itemAdmin.icon" 
        :title="itemAdmin.title" 
        :value="itemAdmin.value"
        min-height="33"
        max-height="33"
        color="red"
        @click="onClickItem(itemAdmin.value, itemAdmin.path)"
      ></v-list-item>
    </template>
    <template v-slot:footer_drawer>
      <div class="sidemenu-admin-footer font-primary" @click="onLogoutUser">
        <v-icon class="mr-2" size="22" icon="mdi-logout" color="#008F8C"></v-icon>
        <span>Sair</span>
      </div>
    </template>
  </CustomNavigationDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CustomNavigationDrawer from '../../components/CustomComponents/CustomNavigationDrawer.vue';
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const drawerAdmin = ref(true)
const drawerAdminRail = ref(false)
const drawerAdminValue = ref('home')
const drawerAdminProps = ref({
  width: '200',
  color: "#FFFFFF",
  elevation: "2",
})
const drawerAdminItems = ref([
  {
    title: 'Home',
    icon: 'mdi-home',
    value: 'home',
    path: '/adminHome'
  },
  {
    title: 'Aprovação',
    icon: 'mdi-account-clock',
    value: 'approve',
    path: '/review',
  }
])

const onClickItem = (value, path) => {
  drawerAdminValue.value = value
  router.push(path)
  console.log('dalee', drawerAdminValue.value)
}

const onLogoutUser = async () => {
  localStorage.clear();
  await store.dispatch('user/setUserValue', {userInfo: undefined})
  router.push('/login')
}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Bowlby+One+SC&display=swap');

.sidemenu-item-active {
  background-color: #008f8d2c;
  color: #008F8C !important;
}

.sidemenu-admin-container {
  border-right-width: 2px;
  border-image: linear-gradient(180deg, #7810C2, #0CABA8);
  border-image-slice: 1;
  .v-list-item__overlay {
    display: none;
  }
  .list-item {
    color: #008F8C !important;
    font-family: "Bai Jamjuree", sans-serif;
    border-left: solid 1px #008F8C;
    padding: 0px;
    margin-top: 10px;
    margin-left: 10px;
    .v-list-item-title {
      font-weight: 300 !important;
    }
    .v-list-item__prepend {
      display: block;
      i {
        font-size: 22px;
      }
    }
  }
}

.sidemenu-admin-footer {
  display: flex;
  padding: 10px 18px;
  color: #008F8C;
  font-weight: 300;
  font-size: 13px;
  border-top: solid 1px #8A8A8A;
  &:hover {
    background-color: #008f8d2c ;
    cursor: pointer;
  }
}

.sidemenu-admin-divider {
  color: #8A8A8A;
  font-size: 12px;
  margin-left: 10px;
  font-weight: 300;
  border-bottom: solid 1px #8A8A8A;
}

.sidemenu-admin-header {
  font-family: "Bowlby One SC", sans-serif;
  color: #008F8C;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>