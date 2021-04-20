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
import MainHeader from "./../components/MainHeader.vue";

export default {
  name: "Users",
  components: { MainHeader },
  data() {
    return {
      headername: "Users",
    };
  },
};
</script>
