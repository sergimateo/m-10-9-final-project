<template>
  <v-autocomplete
    class="mr-2 ml-16 my-2"
    flat
    dark
    clearable
    no-data-text="User not found"
    hide-details
    auto-select-first
    ref="theSelect"
    label="Search Users"
    :items="names"
    append-outer-icon="mdi-magnify"
    @click:append-outer="handleAppendOuterIconClick"
    @update:search-input="updateUser"
    solo-inverted
  ></v-autocomplete>
</template>

<script>
import { mapState } from "vuex";
import router from "./../router";

export default {
  name: "SearchBar",
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    names() {
      return this.users.map((user) => user.name);
    },
  },
  methods: {
    updateUser(e) {
      this.username = e;

      console.log(this.username);
      e = "";
      console.log(e);
    },
    handleAppendOuterIconClick(e) {
      console.log(e);
      console.log(this.username);
      router.push({ name: "UserDetails", params: { username: this.username } });
      //   this.doChange(this.previousValue);
    },
  },

  data: () => ({
    username: "",
  }),
};
</script>
