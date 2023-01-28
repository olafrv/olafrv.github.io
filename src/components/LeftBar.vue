<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
    >
        <v-list nav density="compact">
            <v-list-item nav title="Site Map">
                <template v-slot:prepend>
                    <v-icon icon="mdi-sitemap"></v-icon>
                </template>
                <template v-slot:append>
                    <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                    ></v-btn>
                </template>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav density="compact">
          <v-list-item nav v-for="item in items"
              :prepend-icon="item.icon" :title="item.title" :value="item.path"
              @click="onClick(item)"
          ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' , path: '/'},
        { title: 'Quiniela', icon: 'mdi-soccer', path: '/soccer' },
        { title: 'Projects', icon: 'mdi-github', path: '/projects' },
        { title: 'Trending', icon: 'mdi-repeat-variant', path: '/trending' },
        { title: 'Resume', icon: 'mdi-linkedin', path: '/resume' },
      ],
      rail: true,
    }
  },
  methods: {
    onClick(item) {
      if (item.path.startsWith('http')){
        console.log(item.path)
        // this.$router.go(item.path);
      }else{
        this.$router.push(item.path);
      }
    },
  }
}
</script>