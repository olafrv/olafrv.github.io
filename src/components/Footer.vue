<template>
    <v-footer>
        <v-row justify="right">
            <v-spacer></v-spacer>
            Made with:&nbsp; 
            <a href="https://vuejs.org/" target='_blank'>
                <img max-height="25px" src="src/assets/vue.svg" />
            </a>
            &nbsp;
            <a href="https://vitejs.dev/" target='_blank'>
                <img max-height="25px" src="/vite.svg" />
            </a>
            &nbsp;
            {{ year>2023 ? "@2023 - ":" @" }} {{ new Date().getFullYear() }}
        </v-row>
        <v-spacer></v-spacer>
    </v-footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>