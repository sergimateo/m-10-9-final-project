import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navDrawerItems: [
      { id: "1", title: "Home", icon: "mdi-home", to: "/" },
      { id: "2", title: "Users", icon: "mdi-account-group", to: "/users" },
      {
        id: "3",
        title: "Pictures",
        icon: "mdi-image-multiple",
        to: "/pictures",
      },
      { id: "4", title: "About", icon: "mdi-information", to: "/about" },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
