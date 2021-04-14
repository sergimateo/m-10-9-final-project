<template>
  <v-container height="90vh">
    <v-row class="text-center">
      <v-col cols="12"> </v-col>

      <v-col class="mb-3">
        <h1 class="display-1 font-weight-bold mb-2">
          Welcome to my last Project
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Las tarjetitas resumen:</h2>

        <v-row justify="center">
          <v-col cols="auto">
            <v-card class="mx-auto" elevation="3" width="340">
              <v-card-title> Most visited users</v-card-title>

              <!-- <v-card-subtitle> {{ user.email }} </v-card-subtitle> -->
              <v-divider class="mx-4"></v-divider>
              <v-card-text class="py-1"> User: Y </v-card-text>
              <v-card-text class="py-1"> User: Y </v-card-text>
              <v-card-text class="py-1"> User: Y </v-card-text>
              <v-card-text class="py-1"> User: Y </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card class="mx-auto" elevation="3" width="340">
              <v-card-title> Most visited albums</v-card-title>

              <!-- <v-card-subtitle> {{ user.email }} </v-card-subtitle> -->
              <v-divider class="mx-4"></v-divider>
              <v-card-text class="py-1"> Album: X </v-card-text>
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
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
