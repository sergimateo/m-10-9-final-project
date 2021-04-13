<template>
  <div class="pt-3">
    <!-- <MainHeader :title="title"></MainHeader> -->
    <p>{{ $route.params.albumtitle }} album details</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import MainHeader from "./../components/MainHeader.vue";

export default {
  name: "AlbumDetails",
  // components: { MainHeader },
  computed: {
    ...mapState({
      users: (state) => state.albums,
    }),
  },
  data() {
    return {
      title: "Album Details",
    };
  },
};
</script>
