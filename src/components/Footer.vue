<template>
    <v-footer>
        <v-row>
            <v-spacer></v-spacer>
            Made with:&nbsp;
            <a href="https://vitejs.dev/" target='_blank'>
                <v-img width="25px"  src="/vite.svg" />
            </a>&nbsp; 
            <a href="https://vuejs.org/" target='_blank'>
                <v-img width="25px"  src="src/assets/vue.svg" />
            </a>&nbsp;
            <a href="https://vuetifyjs.com/" target='_blank'>
                <v-img width="25px" cover src="/vuetify.svg" />
            </a>&nbsp;
            <a href="https://blender.org/" target='_blank'>
                <v-img width="25px" cover src="/blender.svg" />
            </a>&nbsp;
            {{ year > 2023 ? "@2023 - ":" @" }} {{ year }}
        </v-row>
        <v-spacer></v-spacer>
    </v-footer>
</template>

<script setup>
    const year = new Date().getFullYear()
</script>