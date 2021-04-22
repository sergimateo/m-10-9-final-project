<template>
  <v-container fluid>
    <v-row justify="center"><h1>Project made with</h1></v-row>
    <v-row class="my-4" justify="center">
      <v-col class="my-4" cols="auto">
        <v-img src="./../assets/vue-js-1.svg"></v-img>
        <h3 class="mt-2 text-center">Vue.js 2.6</h3>
      </v-col>
      <v-col justify="center" class="my-4 mx-4" cols="auto"
        ><v-img src="./../assets/vuetify.svg" />
        <div>
          <h3 class="mt-2 text-center">Vuetify 2.4.11</h3>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-2" cols="12">
      <v-img max-width="400" src="./../assets/animate-css.svg"></v-img>
    </v-row>
  </v-container>
</template>
