<template>
  <v-app>
    <v-card>
      <v-app-bar color="teal darken-3" app dense dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title
          ><router-link to="/" tag="span" style="cursor: pointer">
            Title
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
            <!-- 
            <v-list-item to="/users">
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item>
            <v-list-item to="/pictures">
              <v-list-item-icon>
                <v-icon>mdi-image-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pictures</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title to="/about">About</v-list-item-title>
            </v-list-item> -->
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
    </v-card>
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
