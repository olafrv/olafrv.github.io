<template>
    <v-footer padless>
        <v-row
            justify="center"
            no-gutters
        >
            <v-spacer></v-spacer>
            <v-img max-height="25px" src="src/assets/vue.svg" />
            <v-img max-height="25px" src="/vite.svg" />
            <v-spacer></v-spacer>
            <v-col
                class="primary lighten-2 py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

