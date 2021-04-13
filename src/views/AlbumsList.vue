<template>
  <v-row justify="center">
    <v-col v-for="item in albums" :key="item.id" cols="auto">
      <v-card
        class="d-flex flex-column mx-auto pb-1 align-content-center"
        elevation="3"
        width="340"
        height="200"
      >
        <v-card-title class="mx-auto mb-auto album-title"
          >{{ item.title }}
        </v-card-title>

        <v-card-actions justify="space-around">
          <v-btn
            :to="{
              name: 'AlbumDetails',
              params: { albumtitle: item.title },
            }"
            class="mx-auto"
            small
            rounded
            color="teal"
            dark
          >
            View details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <!-- <v-container fluid class="pictures">


    <MainHeader :title="title"></MainHeader>
    <v-row justify="center">
      <v-col v-for="item in albums" :key="item.id" cols="auto">
        <v-card
          class="d-flex flex-column mx-auto pb-1 align-content-center"
          elevation="3"
          width="340"
          height="200"
        >
          <v-card-title class="mx-auto mb-auto album-title"
            >{{ item.title }}
          </v-card-title>

          <v-card-actions justify="space-around">
            <v-btn class="mx-auto" small rounded color="teal" dark>
              View details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
  <!-- <v-row justify="space-around" class="pb-4"
      ><h1>This is the albums page</h1></v-row
    >
    <div class="text-center pb-8">
      <v-btn rounded color="teal darken-2" small dark>
        Back
        <v-icon small class="pl-2"
          >mdi-arrow-left-thin-circle-outline</v-icon
        ></v-btn
      >
    </div> -->
</template>

<style scoped>
.album-title {
  word-break: normal;

  text-align: center;
  /* color: red; */
}
</style>
<script>
import { mapState } from "vuex";
// import MainHeader from "./../components/MainHeader.vue";
// import Dummy from "./../components/Dummy.vue";

export default {
  name: "AlbumsList",
  // components: { MainHeader },

  computed: {
    ...mapState({
      albums: (state) => state.albums,
    }),
  },
  data() {
    return {
      title: "Albums",
    };
  },
};
</script>
