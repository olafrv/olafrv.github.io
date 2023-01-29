// Vite
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// Vite Vuetify Plugin
// https://www.npmjs.com/package/vite-plugin-vuetify
// https://next.vuetifyjs.com/en/features/treeshaking/
// https://vuejs.org/guide/essentials/component-basics.html#dynamic-components
// It requires manual import of dynamic Vue components
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})