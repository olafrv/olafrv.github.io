<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const msg = ref('Hello World!')
</script>

<template>
  <v-app>
    <v-app-bar title="Application"></v-app-bar>
    <v-navigation-drawer>Drawner</v-navigation-drawer>
    <v-main>
      <v-icon icon="mdi-home" />
      <v-text-field v-model="msg" />
      <v-text-field v-model="msg" />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
