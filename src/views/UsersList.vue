<template>
  <!-- <v-container fluid class="users">
    <MainHeader :title="title"></MainHeader> -->

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
            class="mx-auto"
            small
            rounded
            color="teal"
            dark
          >
            View details
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- <v-card class="mx-auto pb-1" elevation="2" width="400" height="100">
          <v-card-title>{{ item.name }} </v-card-title>
          
params: { name: item.name }

          <v-card-actions>
            <v-row justify="space-around"
              ><v-btn small rounded color="teal" dark> View details </v-btn>
            </v-row>
          </v-card-actions>
        </v-card> -->
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>
<style scoped>
.user-title {
  word-break: normal;

  text-align: center;
  /* color: red; */
}
</style>
<script>
import { mapState } from "vuex";
// import MainHeader from "../components/MainHeader.vue";

export default {
  name: "UsersList",
  // components: { MainHeader },
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
