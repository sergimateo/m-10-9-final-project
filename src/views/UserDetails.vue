<template>
  <div class="pt-3">
    <MainHeader :title="title"></MainHeader>
    <p>{{ $route.params.name }} user details</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainHeader from "./../components/MainHeader.vue";

export default {
  components: { MainHeader },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  data() {
    return {
      title: "User Details",
    };
  },
};
</script>
