<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list nav density="compact">
      <v-list-item nav>
        <template v-slot:prepend>
          <v-avatar
            image="https://avatars.githubusercontent.com/u/987499?s=48&v=4" 
            size="32"
          ></v-avatar>
          Olaf Reitmaier
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
      <v-list-item
        nav
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.path"
        v-for="item in items" :key="item.title"
        @click="onClick(item)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", path: "/" },
        { title: "Quiniela", icon: "mdi-soccer", path: "/soccer" },
        { title: "Projects", icon: "mdi-github", path: "/projects" },
        { title: "Trending", icon: "mdi-repeat-variant", path: "/trending" },
        { title: "Resume", icon: "mdi-linkedin", path: "/resume" },
      ],
      rail: true,
    };
  },
  methods: {
    onClick(item) {
      if (item.path.startsWith("http")) {
        window.open(item.path, '_blank');
      } else {
        this.$router.push(item.path);
      }
    },
  },
};
</script>
