<template>
  <v-container fluid class="users">
    <MainHeader :headername="headername"></MainHeader>
    <transition
      appear
      name="container-animation"
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
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
