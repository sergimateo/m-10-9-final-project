import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import albumsList from "./../assets/albumsList.json";
// import usersList from "./../assets/usersList.json";
import picturesList from "./../assets/picturesList.json";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    albums: albumsList,
    users: [],
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
  getters: {
    usersGetter: (state) => {
      return state.users;
    },
  },
  mutations: {
    SET_Users(state, users) {
      state.users = users;
    },
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users", {})
        .then((response) => response.data)
        // .then((users)=> await response.json());
        .then((users) => {
          console.log(users);
          console.log("holi");
          commit("SET_Users", users);
        });
    },
  },
  modules: {},
});
