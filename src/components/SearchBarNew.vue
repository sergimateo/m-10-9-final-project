<template>
  <v-autocomplete
    v-model="select"
    class="info"
    rounded
    dense
    filled
    hide-details
    hide-no-data
    clearable
    @click:clear="clearSearchAndSelection"
    :items="users"
    :search-input.sync="search"
    :menu-props="{ disabled: menuIsDisabled }"
    item-text="name"
    @change="updateUser"
    prepend-inner-icon="mdi-magnify"
    @click:prepend-inner="handlePrependInnerIconClick"
  ></v-autocomplete>
</template>

<script>
import { mapState } from "vuex";
// import { mapState, mapGetters } from "vuex";
import router from "../router";

export default {
  name: "SearchBarNew",
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    // ...mapGetters(["userGetters"]),
    // names() {
    //   return this.users.map((user) => user.name);
    // },
  },
  watch: {
    // menuIsDisabled() {
    //   if (this.search.length < 2) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    search() {
      // this.names = null;

      if (this.search.length < 2) {
        console.log("es petit");
        console.log(this.menuIsDisable);
        // this.usersSelection = this.users;
        this.menuIsDisabled = true;
        return;
      } else {
        // this.usersSelection = this.users;
        this.menuIsDisabled = false;
        return;
      }

      // this.$props.hideNoData = true;
    },
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },

  methods: {
    handlePrependInnerIconClick(e) {
      console.log(e);
      console.log(this.select);

      router.push({
        name: "UserDetails",
        params: { username: this.username },
      });
    },
    updateUser(e) {
      this.username = e;

      console.log(this.username);
    },
    clearSearchAndSelection() {
      console.log("Clear All");
    },
  },

  data: () => ({
    username: "",
    // usersSelection: "",
    // names: [],
    search: null,
    select: null,
    disabled: false,
    hideNoUsersMsg: true,
    hideNoDataMenu: true,
    menuIsDisabled: false,
  }),
};
</script>
