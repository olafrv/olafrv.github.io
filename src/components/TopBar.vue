<script setup>
import { ref } from 'vue';

const props = defineProps(["theme"]);
const emit = defineEmits(["themeChanged"]);
const icon = ref("mdi-weather-sunny");
function themeChanged() {
  icon.value =
    props.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night';
  emit('themeChanged');
}
</script>

<template>
  <v-app-bar>
    <v-spacer></v-spacer>
    <span style="padding: 10px">
      <v-icon @click="themeChanged()">{{ icon }}</v-icon>
    </span>
  </v-app-bar>
</template>