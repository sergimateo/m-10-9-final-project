import Vue from "vue";
import Vuex from "vuex";
import albumsList from "./../assets/albumsList.json";
import usersList from "./../assets/usersList.json";
import picturesList from "./../assets/picturesList.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: albumsList,
    users: usersList,
    pictures: picturesList,
    navDrawerItems: [
      { id: "1", title: "Home", icon: "mdi-home", to: "/" },
      { id: "2", title: "Users", icon: "mdi-account-group", to: "/users" },
      {
        id: "3",
        title: "Albums",
        icon: "mdi-image-multiple",
        to: "/albums",
      },
      { id: "4", title: "About", icon: "mdi-information", to: "/about" },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
