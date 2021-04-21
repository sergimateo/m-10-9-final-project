<template>
  <!-- <v-container> -->
  <!-- <v-card color="red lighten-2" dark> -->
  <!-- <v-card-title class="headline red lighten-3">
      Search for Public APIs
    </v-card-title> -->
  <!-- <v-card-text>
      Explore hundreds of free API's ready for consumption! For more information
      visit
      <a
        class="grey--text text--lighten-3"
        href="https://github.com/toddmotto/public-apis"
        target="_blank"
        >the Github repository</a
      >.
    </v-card-text> -->
  <!-- <v-card-text> -->
  <v-autocomplete
    class="ml-4 my-1 info"
    rounded
    clearable
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    hide-no-data
    hide-details
    hide-selected
    item-text="Description"
    item-value="API"
    label="Search Users"
    placeholder=""
    prepend-inner-icon="mdi-magnify"
    @click:prepend-inner="handlePrependInnerIconClick"
  ></v-autocomplete>
  <!-- </v-card-text> -->
  <!-- return-object -->
  <!-- <v-divider></v-divider> -->
  <!-- <v-expand-transition>
      <v-list v-if="model" class="red lighten-3">
        <v-list-item v-for="(field, i) in fields" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition> -->
  <!-- <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!model" color="grey darken-3" @click="model = null">
        Clear
        <v-icon right> mdi-close-circle </v-icon>
      </v-btn>
    </v-card-actions> -->
  <!-- </v-card> -->
  <!-- </v-container> -->
</template>
<script>
import router from "../../router";
export default {
  name: "SearchApiBar",
  data: () => ({
    descriptionLimit: 60,
    items: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    // fields() {
    //   if (!this.model) return [];
    //   return Object.keys(this.model).map((key) => {
    //     return {
    //       key,
    //       value: this.model[key] || "n/a",
    //     };
    //   });
    // },
    // items() {
    //   return this.entries.map((entry) => {
    //     const Description =
    //       entry.Description.length > this.descriptionLimit
    //         ? entry.Description.slice(0, this.descriptionLimit) + "..."
    //         : entry.Description;
    //     return Object.assign({}, entry, { Description });
    //   });
    // },
  },

  watch: {
    search(val) {
      console.log(val);
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
  methods: {
    handlePrependInnerIconClick(e) {
      console.log(e);
      console.log(this.username);

      router.push({ name: "UserDetails", params: { username: this.username } });
    },
  },
};
</script>
