import Vue from "vue";
import Vuex from "vuex";
import PlaceholderService from "../Services/PlaceholderService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: [],
    users: [],
    pictures: [],
    mostVisitedUsers: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        views: 4,
      },

      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        views: 3,
      },

      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        views: 2,
      },

      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        views: 1,
      },
    ],
    mostVisitedAlbums: [],
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
    SET_Users(state, items) {
      state.users = items;
    },
    SET_Albums(state, items) {
      state.albums = items;
    },
    SET_Pictures(state, items) {
      state.pictures = items;
    },
  },
  actions: {
    async loadUsers({ commit }) {
      const response = await PlaceholderService.GetUsersPlaceholder();
      commit("SET_Users", response.data);
    },
    async loadAlbums({ commit }) {
      const response = await PlaceholderService.GetAlbumsPlaceholder();
      commit("SET_Albums", response.data);
    },
    async loadPictures({ commit }) {
      const response = await PlaceholderService.GetPicturesPlaceholder();
      commit("SET_Pictures", response.data);
    },
    userViewed(e, user) {
      console.log("userViewed");
      console.log(e);
      console.log(user);
      // const viewed = this.mostVisitedUsers.findIndex(
      //   (item) => item.id === user.id
      // );
      // if (viewed === -1) {
      //   user.views = 1;
      //   this.mostVisitedUsers.push(user);
      // } else {
      //   let userViewed = this.mostVisitedUsers.find(
      //     (item) => item.id === user.id
      //   );
      //   userViewed.views++;
      // }
    },
    albumViewed(e) {
      console.log("albumViewed");
      console.log(e);
    },
  },
  modules: {},
});
