<template>
  <v-container fluid class="users">
    <MainHeader :headername="headername"></MainHeader>

    <router-view></router-view>
  </v-container>
</template>
<style scoped>
.user-title {
  word-break: normal;
  text-align: center;
}
</style>
<script>
import { mapState } from "vuex";
import MainHeader from "./../components/MainHeader.vue";

export default {
  name: "Users",
  components: { MainHeader },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  data() {
    return {
      headername: "Users",
    };
  },
};
</script>
