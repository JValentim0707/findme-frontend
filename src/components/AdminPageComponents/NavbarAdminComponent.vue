<template>
  <div class="navbar-admin">
    <div class="navbar-admin-logo">
      <span class="navbar-admin-project">FindMe</span>
    </div>
    <div class="navbar-admin-user">
      <div class="icon-admin-user"> <v-icon icon="mdi-account"></v-icon> </div>
      <div class="container-admin-user-info">
        <div class="font-primary">
          <span>{{ `${userLoggedInfo.firstName}, ${userLoggedInfo.lastName}` }}</span>
        </div>
        <span class="font-primary text-role">{{ userLoggedInfo.role }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useStore } from 'vuex';
import { computed } from 'vue'

const store = useStore()

const userLoggedInfo = computed(() => { return store._state.data.user.userInfo })

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Bowlby+One+SC&display=swap');

.navbar-admin {
 display: flex;
 justify-content: space-between;
 width: 100%;
 background-color: #008F8C;
 height: 45px;
 padding: 0px 20px;
 .navbar-admin-logo {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .navbar-admin-user {
  display: flex;
  align-items: center;
  .icon-admin-user {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: solid 1px #ffffff;
    width: 35px;
    height: 35px;
  }
  .container-admin-user-info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;

    .text-role {
      text-transform: capitalize;
      color: #023535;
      font-weight: 600;
    }
  }
 }
 .navbar-admin-project {
  font-family: "Bowlby One SC", sans-serif;
  color: #ffffff;
  font-size: 20px;
 }
}
</style>