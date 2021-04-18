<template>
  <div class="home">
    <CryptoBar v-show="false"></CryptoBar>
    <StateBar v-show="true"></StateBar>
    <MainView />
  </div>
</template>

<script>
// @ is an alias to /src
import MainView from "./../components/MainView.vue";
import CryptoBar from "./../components/CryptoBar.vue";
import StateBar from "./../components/StateBar.vue";
export default {
  name: "Home",
  components: {
    MainView,
    CryptoBar,
    StateBar,
  },
};
</script>
