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
              params: { albumtitle: item.title, albumid: item.id },
            }"
            class="mx-auto info"
            small
            rounded
          >
            View details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
