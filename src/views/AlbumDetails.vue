<template>
  <div class="pt-3">
    <v-row justify="space-around" class="pb-4"><h2>Album details</h2></v-row>
    <v-row justify="space-around" class="pb-4"
      ><h3>{{ $route.params.albumtitle }}</h3>
    </v-row>
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
import { mapGetters } from "vuex";

export default {
  name: "AlbumDetails",

  computed: {
    ...mapGetters({
      pictures: "picturesGetter",
    }),
    pics() {
      return this.pictures.filter(
        (pics) => pics.albumId === this.$route.params.albumid
      );
    },
  },

  data() {
    return {
      title: "Album Details",
    };
  },
};
</script>
