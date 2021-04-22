<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="my-4">
        <h1 class="display-1 font-weight-bold mb-2">
          Welcome To Module 10.9 Vue Final Project
        </h1>
      </v-col>

      <v-col class="mt-5" cols="12">
        <!-- estas 2 tarjetas podrian ser un componente
         en vez de repetir el codigo 2 veces, se podria refactorizar... -->
        <v-row justify="center">
          <v-col cols="auto">
            <v-card
              shaped
              :loading="loadingUsers"
              class="mx-auto primary lighten-2"
              rounded-lg
              elevation="3"
              width="340"
              min-height="218"
            >
              <v-card-text class="secondary text-center font-weight-bold title"
                >Most Visited Users</v-card-text
              >
              <v-card-text v-for="item in users" :key="item.id" class="py-1">
                <strong>{{ item.name }}: {{ item.views }}</strong>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              shaped
              :loading="loadingAlbums"
              class="mx-auto primary lighten-2"
              elevation="3"
              width="340"
              min-height="218"
            >
              <v-card-text class="secondary text-center font-weight-bold title"
                >Most Visited Albums</v-card-text
              >
              <v-card-text v-for="item in albums" :key="item.id" class="py-1">
                <strong>{{ item.title }}: {{ item.views }} </strong>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MainView",
  computed: {
    ...mapGetters({
      users: "mostVisitedUsersGetter",
      albums: "mostVisitedAlbumsGetter",
      loadingUsers: "loadingMostVisitedUsersCardGetter",
      loadingAlbums: "loadingMostVisitedAlbumsCardGetter",
    }),
  },
  mounted() {
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadAlbums");
    this.$store.dispatch("loadPictures");
  },

  data: () => ({
    loading: false,
  }),
};
</script>
