<template>
  <v-app>
    <AppToolbar></AppToolbar>
    <!-- Sizes your content based upon application components -->
    <v-main aria-haspopup="">
      <!-- Provides the application the proper gutter -->
      <v-container v-show="true" fluid>
        <transition
          appear
          name="container-animation"
          enter-active-class="animate__animated animate__fadeIn animate__fast"
          leave-active-class="animate__animated animate__fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>

    <v-footer class="primary justify-center" app>
      <div>Made with</div>
      <v-icon class="px-1" color="secondary">mdi-heart</v-icon>
      <div>by SMC Designs</div>
    </v-footer>
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
