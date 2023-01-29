// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi"; // Not optimal for production
import { md2 } from "vuetify/blueprints";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  blueprint: md2,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});