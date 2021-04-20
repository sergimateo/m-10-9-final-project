<template>
  <div class="pt-3">
    <!-- <MainHeader :title="title"></MainHeader> -->
    <v-row justify="space-around" class="pb-4"><h2>Album details</h2></v-row>
    <v-row justify="space-around" class="pb-4"
      ><h3>{{ $route.params.albumtitle }}</h3></v-row
    >
    <v-row justify="center">
      <v-col v-for="item in pics" :key="item.id" cols="auto">
        <v-card elevation="3" width="150" height="150">
          <v-img height="150px" :src="item.thumbnailUrl"> </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AlbumDetails",
  // components: { MainHeader },
  computed: {
    ...mapState({
      albums: (state) => state.albums,
    }),
    ...mapState({
      pictures: (state) => state.pictures,
    }),

    album() {
      return this.albums.find(
        (album) => album.id === this.$route.params.albumid
      );
    },
    pics() {
      return this.pictures.filter(
        (pics) => pics.albumId === this.$route.params.albumid
      );
    },
  },
  mounted() {
    console.log("pics mounted");
    this.$store.dispatch("loadPictures");
  },

  data() {
    return {
      title: "Album Details",
    };
  },
};
</script>
