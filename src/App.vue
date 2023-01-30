<script setup>
  import { ref } from 'vue'
  import TopBar from './components/TopBar.vue'
  import LeftBar from './components/LeftBar.vue'
  import PageFooter from './components/PageFooter.vue'
  import SnackBar from './components/SnackBar.vue'
  
  const theme = ref('dark')
  function setTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>

<template>
  <v-app :theme="theme">
    <LeftBar />
    <TopBar @themeChanged="setTheme()" :theme="theme" />
    <v-main>
      <router-view />
      <PageFooter />  
    </v-main>
    <SnackBar />
  </v-app>
</template>