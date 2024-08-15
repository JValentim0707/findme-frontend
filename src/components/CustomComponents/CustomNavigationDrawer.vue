<template>
  <v-navigation-drawer
    v-bind="navigationDrawerProps"
  >
    <v-list-item class="header-item" nav>
      <template v-slot:append>
        <slot name="header_drawer"></slot>
      </template>
    </v-list-item>

    <slot name="divider_drawer"></slot>

    <v-list class="list-item" nav>
      <slot name="items_drawer"></slot>
    </v-list>

    <template v-slot:append>
      <slot name="footer_drawer"></slot>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
  defineProps({
    navigationDrawerProps: Object
  })
</script>

<style lang="scss" scoped>
.header-item {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.list-item {
  color: black;
}
</style>