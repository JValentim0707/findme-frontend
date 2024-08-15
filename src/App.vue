<template>
  <v-app class="container-application">
    <v-main>
      <div v-if="userLoggedInfo && userLoggedInfo.role === 'admin'">
        <NavbarAdminComponent></NavbarAdminComponent>
        <SidemenuAdminComponent></SidemenuAdminComponent>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

// Utility Functions
import { computed, onMounted, ref } from 'vue'
import { mapActions } from 'vuex';
import { useStore } from 'vuex';

// Components Admin
import SidemenuAdminComponent from './components/AdminPageComponents/SidemenuAdminComponent.vue';
import NavbarAdminComponent from './components/AdminPageComponents/NavbarAdminComponent.vue';

const store = useStore()

const userLoggedInfo = computed(() => { return store._state.data.user.userInfo })

</script>

<style lang="scss" scoped>
.container-application {
  background-color: white;
}
</style>
