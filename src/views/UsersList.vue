<template>
  <v-row justify="center">
    <v-col v-for="item in users" :key="item.id" cols="auto">
      <v-card
        class="d-flex flex-column mx-auto pb-1 align-content-center"
        elevation="3"
        width="340"
        height="200"
      >
        <v-card-title class="mx-auto mb-auto user-title"
          >{{ toUpperCase(item.name) }}
        </v-card-title>

        <v-card-actions justify="space-around">
          <v-btn
            @click="handleViewDetails(item.id)"
            class="mx-auto info"
            small
            rounded
          >
            View details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
/* no hace faltam pero por si llegase un nombre de usuario demasiado
 largo, hacerle un word-break */
.user-title {
  word-break: normal;

  text-align: center;
}
</style>

<script>
import { mapState } from "vuex";
import router from "../router";

export default {
  name: "UsersList",

  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    toUpperCase(name) {
      return name.toUpperCase();
    },
    handleViewDetails(e) {
      const viewedUser = this.users.find((item) => item.id === e);

      this.$store.dispatch("userViewed", viewedUser);
      router.push({
        name: "UserDetails",
        params: { username: viewedUser.name },
      });
    },
  },
  // mounted() {
  //   this.$store.dispatch("loadUsers");
  // },
  data() {
    return {
      title: "Users",
    };
  },
};
</script>
