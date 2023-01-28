<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-avatar
        image="https://avatars.githubusercontent.com/u/987499?s=48&v=4" 
        size="48"
      ></v-avatar>
    </template>
    <slot></slot>
    <v-spacer></v-spacer>
    <span style="padding: 10px">
      <v-icon @click="themeChanged()">{{ icon }}</v-icon>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      icon: 'mdi-weather-sunny'
    } 
  },
  props: {
    theme: 'light',
  },
  methods: {
    themeChanged() {
        this.icon = this.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        this.$emit('themeChanged')
      }
    }
}
</script>