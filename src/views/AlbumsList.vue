<template>
  <v-row justify="center">
    <v-col v-for="item in albums" :key="item.id" cols="auto">
      <v-card
        shaped
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
            @click="handleViewDetails(item.title, item.id)"
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
/* aqui si que hace falta pasarle un word-break
 a los titulos de los albums */
.album-title {
  word-break: normal;

  text-align: center;
}
</style>

<script>
import { mapGetters } from "vuex";
import router from "../router";

export default {
  name: "AlbumsList",

  computed: {
    ...mapGetters({
      albums: "albumsGetter",
    }),
  },
  methods: {
    handleViewDetails(title, id) {
      const viewedAlbum = this.albums.find((item) => item.id === id);
      this.$store.dispatch("albumViewed", viewedAlbum);
      router.push({
        name: "AlbumDetails",
        params: { albumtitle: title, albumid: id },
      });
    },
  },
};
</script>
