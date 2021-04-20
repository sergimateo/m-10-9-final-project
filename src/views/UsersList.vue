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
          >{{ item.name }}
        </v-card-title>

        <v-card-actions justify="space-around">
          <v-btn
            :to="{
              name: 'UserDetails',
              params: { username: item.name },
            }"
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
.user-title {
  word-break: normal;

  text-align: center;
}
</style>
<script>
import { mapState } from "vuex";

export default {
  name: "UsersList",

  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  data() {
    return {
      title: "Users",
    };
  },
};
</script>
