<script setup>
  import { ref } from 'vue'
  import TopBar from './components/TopBar.vue'
  import LeftBar from './components/LeftBar.vue'
  import Title from './components/TitleFont2.vue'
  import Footer from './components/Footer.vue'

  const theme = ref('dark')
  function setTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>

<template>
  <v-app :theme="theme">
    <TopBar @themeChanged="setTheme()" :theme="theme">
      <Title />
    </TopBar>
    <LeftBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
</v-app>
</template>