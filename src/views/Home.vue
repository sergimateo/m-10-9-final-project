<template>
  <div class="home">
    <CryptoBar></CryptoBar>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CryptoBar from "./../components/CryptoBar.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    CryptoBar,
  },
};
</script>
