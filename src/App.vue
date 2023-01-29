<script setup>
  import { ref } from 'vue'
  import TopBar from './components/TopBar.vue'
  import LeftBar from './components/LeftBar.vue'
  import Footer from './components/Footer.vue'

  const theme = ref('dark')
  function setTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>

<template>
  <v-app :theme="theme">
    <LeftBar />
    <TopBar @themeChanged="setTheme()" :theme="theme">
    </TopBar>
    <v-main>
      <router-view />
      <Footer/>  
    </v-main>
  </v-app>
</template>