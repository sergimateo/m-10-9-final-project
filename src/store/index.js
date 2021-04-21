import Vue from "vue";
import Vuex from "vuex";
import PlaceholderService from "../Services/PlaceholderService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: [],
    users: [],
    pictures: [],
    mostVisitedUsers: [],

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
    mostVisitedUsersGetter: (state) => {
      if (state.mostVisitedUsers.length < 1) {
        console.log("primer ordeño lo hace 2 veces?");
        const sortedUsers = state.users;
        sortedUsers.sort((userA, userB) =>
          userA.name.localeCompare(userB.name)
        );
        const slicedUsers = sortedUsers.slice(0, 5);
        slicedUsers.forEach((item) => (item.views = 0));
        state.mostVisitedUsers = slicedUsers;
        return slicedUsers;
      } else {
        console.log("para ver si ordena el getter con mas 2");
        const sortedUsers = state.mostVisitedUsers.sort(
          (userA, userB) =>
            userB.views - userA.views || userA.name.localeCompare(userB.name)
        );
        const slicedUsers = sortedUsers.slice(0, 5);
        state.mostVisitedUsers = slicedUsers;

        return state.mostVisitedUsers;
      }
    },
    mostVisitedAlbumsGetter: (state) => {
      if (state.mostVisitedAlbums.length < 1) {
        const sortedAlbums = state.albums;
        sortedAlbums.sort((albumA, albumB) =>
          albumA.title.localeCompare(albumB.title)
        );
        const slicedAlbums = sortedAlbums.slice(0, 5);
        slicedAlbums.forEach((item) => (item.views = 0));
        state.mostVisitedAlbums = slicedAlbums;

        return slicedAlbums;
      } else {
        const sortedAlbums = state.mostVisitedAlbums.sort(
          (albumA, albumB) =>
            albumB.views - albumA.views ||
            albumA.title.localeCompare(albumB.title)
        );

        state.mostVisitedAlbums = sortedAlbums.slice(0, 5);

        return state.mostVisitedAlbums;
      }
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
      console.log("userViewed action");
      console.log(e);
      // console.log(user);
      // console.log(this.state.mostVisitedUsers);
      const viewed = this.state.mostVisitedUsers.findIndex(
        (item) => item.id === user.id
      );
      // console.log(viewed);
      if (viewed === -1) {
        user.views = 1;
        this.state.mostVisitedUsers.push(user);
        console.log("update con el push");
      } else {
        let userViewed = this.state.mostVisitedUsers.find(
          (item) => item.id === user.id
        );
        userViewed.views++;
        this.state.mostVisitedUsers.sort(
          (userA, userB) =>
            userB.views - userA.views || userA.name.localeCompare(userB.name)
        );
        console.log("por aqui no actualiza verdad? ahora si!");
      }
    },
    albumViewed(e, album) {
      console.log("albumViewed action");
      console.log(e);
      console.log(album);
      console.log(this.state.mostVisitedAlbums);
      const viewed = this.state.mostVisitedAlbums.findIndex(
        (item) => item.id === album.id
      );
      console.log(viewed);
      if (viewed === -1) {
        album.views = 1;
        this.state.mostVisitedAlbums.push(album);
      } else {
        let albumViewed = this.state.mostVisitedAlbums.find(
          (item) => item.id === album.id
        );
        this.state.mostVisitedAlbums.sort(
          (albumA, albumB) =>
            albumB.views - albumA.views ||
            albumA.title.localeCompare(albumB.title)
        );
        albumViewed.views++;
      }
    },
  },
  modules: {},
});
