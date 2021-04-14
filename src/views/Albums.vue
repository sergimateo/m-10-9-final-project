<template>
  <v-container fluid class="albums">
    <MainHeader :headername="headername"></MainHeader>
    <router-view></router-view>
  </v-container>
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
import MainHeader from "./../components/MainHeader.vue";

export default {
  name: "Albums",
  components: { MainHeader },

  computed: {
    ...mapState({
      albums: (state) => state.albums,
    }),
  },
  data() {
    return {
      headername: "Albums",
    };
  },
};
</script>
