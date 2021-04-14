<template>
  <v-app>
    <v-app-bar color="teal darken-4" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" tag="span" style="cursor: pointer">
          Vue.js Final Project
        </router-link></v-toolbar-title
      >
      <v-spacer class="mx-auto"></v-spacer>
      <SearchBar></SearchBar>
      <!-- <v-autocomplete
        class="mr-4 ml-16"
        flat
        dark
        hide-details
        label="Search Users"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-autocomplete> -->
      <!-- <v-toolbar dense floating dark>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>

        <v-btn icon>
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar> -->
      <!-- :items="usernames" -->
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
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: { SearchBar },
  computed: {
    ...mapState({
      navDrawerItems: (state) => state.navDrawerItems,
    }),
    ...mapState({
      users: (state) => state.users,
    }),
    // usernames: this.users.name,
  },

  data: () => ({
    drawer: false,
    group: null,
    // usernames: users.name,
  }),
};
</script>
