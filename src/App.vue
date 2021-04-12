<template>
  <v-app>
    <v-app-bar color="teal darken-4" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" tag="span" style="cursor: pointer">
          IT Academy | Vue.js Final Project
        </router-link></v-toolbar-title
      >
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      color="teal darken-1"
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="teal darken-1--text text--accent-4"
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
    <v-main app>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> The footer </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      navDrawerItems: (state) => state.navDrawerItems,
    }),
  },

  components: {},

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
