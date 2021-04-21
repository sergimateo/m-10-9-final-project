<template>
  <v-autocomplete
    class="mr-2 ml-16 my-2"
    flat
    dark
    clearable
    dense
    v-model="select"
    no-data-text="User not found"
    hide-details
    :hide-no-data="hideNoUsersMsg"
    auto-select-first
    label="Search Users"
    :items="names"
    :search-input.sync="search"
    prepend-inner-icon="mdi-magnify"
    @click:prepend-inner="handleAppendOuterIconClick"
    @update:search-input="updateUser"
    solo-inverted
  ></v-autocomplete>
</template>

<script>
import { mapState } from "vuex";
import router from "../../router";

export default {
  name: "SearchBar",
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    // names() {
    //   return this.users.map((user) => user.name);
    // },
    //   hideNoData() {
    //     if (this.username === "") {
    //       return (this.$props.hideNoData = true);
    //     }
    //   },
    // },
  },
  watch: {
    search(val) {
      if (val == "") {
        this.names = null;
        console.log("holi");
        this.hideNoUsersMsg = true;
        return;
        // this.$props.hideNoData = true;
      }
      if (val.length > 1) {
        // this.$props.hideNoData = false;
        // this.$props.hideNoData = !this.$props.hideNoData;
        // this.hideNoUsersMsg = false;
        val && val !== this.select && this.querySelections(val);
      }
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      this.hideNoUsersMsg = true;
      // Simulated ajax query
      setTimeout(() => {
        this.names = this.users
          .map((user) => user.name)
          .filter((e) => {
            return (
              (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
            );
          });
        this.hideNoUsersMsg = false;
        this.loading = false;
      }, 500);
    },
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
    names: [],
    search: null,
    select: null,
    loading: false,
    hideNoUsersMsg: true,
  }),
};
</script>
