// Vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
// https://next.vuetifyjs.com/en/getting-started/installation/
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Not optimal for production
import { md2 } from 'vuetify/blueprints' // https://m2.material.io/ or https://m3.material.io/ ?

export const vuetify = createVuetify({
    theme: { 
        defaultTheme: 'dark',
    },
    blueprint: md2,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        }
    },
})

// https://vuejs.org/guide/quick-start.html
createApp(App).use(vuetify).mount('#app')
