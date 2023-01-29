<template>
  <v-app-bar>
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
      icon: "mdi-weather-sunny",
    };
  },
  props: {
    theme: "light",
  },
  methods: {
    themeChanged() {
      this.icon =
        this.theme === "light" ? "mdi-weather-sunny" : "mdi-weather-night";
      this.$emit("themeChanged");
    },
  },
};
</script>
