<template>
  <v-app>
    <AppToolbar></AppToolbar>
    <!-- Sizes your content based upon application components -->
    <v-main class="info lighten-4" aria-haspopup="">
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
// import { mapState } from "vuex";
import AppToolbar from "./components/AppToolbar.vue";

export default {
  name: "App",

  components: { AppToolbar },
};
</script>
