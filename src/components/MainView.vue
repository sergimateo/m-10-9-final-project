<template>
  <v-container height="90vh">
    <v-row class="text-center">
      <v-col class="my-4">
        <h1 class="display-1 font-weight-bold mb-2">
          Welcome to my Vue.js Last Project
        </h1>
      </v-col>

      <v-col class="mt-5" cols="12">
        <!-- <h2 class="headline font-weight-bold mb-3">Las tarjetitas resumen:</h2> -->

        <v-row justify="center">
          <v-col cols="auto">
            <v-card class="mx-auto" elevation="3" width="340">
              <v-card-text class="text-center font-weight-bold title"
                >Most Visited Users</v-card-text
              >
              <v-divider class="mx-4"></v-divider>
              <v-card-text v-for="item in users" :key="item.id" class="py-1">
                {{ item.name }}: {{ item.views }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card class="mx-auto" elevation="3" width="340">
              <v-card-text class="text-center font-weight-bold title"
                >Most Visited Albums</v-card-text
              >

              <v-divider class="mx-4"></v-divider>
              <v-card-text class="py-1">Album: X</v-card-text>
              <v-card-text class="py-1"> Album: X </v-card-text>
              <v-card-text class="py-1"> Album: X </v-card-text>
              <v-card-text class="py-1"> Album: X </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainView",
  computed: {
    ...mapState({
      users: (state) => state.mostVisitedUsers,
      albums: (state) => state.mostVisitedAlbums,
    }),
  },

  data: () => ({}),
};
</script>
