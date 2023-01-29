// Vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Not optimal for production
import { md2 } from 'vuetify/blueprints' 

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

const app = createApp(App);
app.use(vuetify).use(router).mount('#app')
