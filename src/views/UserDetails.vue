<template>
  <v-row justify="center" class="pt-3">
    <!-- <MainHeader :title="title"></MainHeader> -->
    <v-col
      ><v-row justify="space-around" class="mb-4">
        <h3 class="mx-auto">{{ $route.params.username }} user details</h3>
      </v-row>
      <v-card class="mx-auto" elevation="3" width="340">
        <!-- <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img> -->

        <v-card-title> {{ user.name }} </v-card-title>

        <v-card-subtitle> {{ user.email }} </v-card-subtitle>

        <v-card-actions>
          <v-btn color="teal darken-2" text @click="show = !show">
            More details
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon color="teal darken-2">{{
              show ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="py-1">
              Address: {{ user.address.street }} , {{ user.address.suite }}
            </v-card-text>
            <v-card-text class="py-1">
              City: {{ user.address.city }} || Zipcode:
              {{ user.address.zipcode }}
            </v-card-text>
            <v-card-text class="py-1"> Phone: {{ user.phone }} </v-card-text>
            <v-card-text class="py-1">
              Company: {{ user.company.name }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col></v-row
  >
</template>

<script>
import { mapState } from "vuex";
// import store from "vuex";
// import router from "./../components/MainHeader.vue";

export default {
  name: "UserDetails",
  // components: { MainHeader },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    user() {
      return this.users.find(
        (user) => user.name === this.$route.params.username
      );
    },
  },
  data() {
    return {
      title: "User Details",
      show: false,
    };
  },
};
</script>
