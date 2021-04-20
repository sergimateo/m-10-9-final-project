<template>
  <v-app>
    <v-app-bar class="primary" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" tag="span" style="cursor: pointer">
          <strong> Vue.js Final Project</strong>
        </router-link></v-toolbar-title
      >
      <v-spacer class="mx-auto"></v-spacer>
      <SearchUsersBar></SearchUsersBar>

      <v-tooltip color="secondary" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="mx-3 info"
            elevation="2"
            icon
            small
            @click="toggleTheme"
            ><v-icon>mdi-invert-colors</v-icon></v-btn
          >
        </template>
        <span>Light/Dark Theme</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="primary" app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="accent darken-1--text text--accent-4"
        >
          <v-list-item
            v-for="item in navDrawerItems"
            :key="item.id"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main aria-haspopup="">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer class="primary" app> The footer </v-footer>
  </v-app>
</template>
<style>
html {
  overflow-y: auto;
}
</style>

<script>
// import HelloWorld from "./components/HelloWorld";
import { mapState } from "vuex";
import SearchUsersBar from "./components/SearchUsersBar.vue";

export default {
  name: "App",

  components: { SearchUsersBar },
  computed: {
    ...mapState({
      navDrawerItems: (state) => state.navDrawerItems,
    }),
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
      this.$vuetify.theme.dark = this.themeToggler;
      this.themeToggler = !this.themeToggler;
    },
  },

  data: () => ({
    drawer: false,
    group: null,
    themeToggler: true,
  }),
};
</script>
