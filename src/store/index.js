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
    loadingMostVisitedUsersCard: false,
    loadingMostVisitedAlbumsCard: false,
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
    albumsGetter: (state) => {
      return state.albums;
    },
    picturesGetter: (state) => {
      return state.pictures;
    },

    loadingMostVisitedUsersCardGetter: (state) => {
      return state.loadingMostVisitedUsersCard;
    },
    loadingMostVisitedAlbumsCardGetter: (state) => {
      return state.loadingMostVisitedAlbumsCard;
    },

    mostVisitedUsersGetter: (state) => {
      const sortedUsers = state.mostVisitedUsers.sort(
        (userA, userB) =>
          userB.views - userA.views || userA.name.localeCompare(userB.name)
      );
      state.mostVisitedUsers = sortedUsers.slice(0, 5);
      return state.mostVisitedUsers;
    },

    mostVisitedAlbumsGetter: (state) => {
      const sortedAlbums = state.mostVisitedAlbums.sort(
        (albumA, albumB) =>
          albumB.views - albumA.views ||
          albumA.title.localeCompare(albumB.title)
      );
      state.mostVisitedAlbums = sortedAlbums.slice(0, 5);
      return state.mostVisitedAlbums;
    },
  },
  mutations: {
    SET_Users(state, items) {
      state.users = items;
      this.state.loadingMostVisitedUsersCard = false;
    },
    SET_Albums(state, items) {
      state.albums = items;
      this.state.loadingMostVisitedAlbumsCard = false;
    },
    SET_Pictures(state, items) {
      state.pictures = items;
      this.state.loadingPictures = false;
    },
  },
  actions: {
    async loadUsers({ commit }) {
      this.state.loadingMostVisitedUsersCard = true;
      const response = await PlaceholderService.GetUsersPlaceholder();
      // esto es solo para probar de hacer un retardo dentro de las actions
      setTimeout(() => {
        commit("SET_Users", response.data);
      }, 1000);
    },
    async loadAlbums({ commit }) {
      this.state.loadingMostVisitedAlbumsCard = true;
      const response = await PlaceholderService.GetAlbumsPlaceholder();
      commit("SET_Albums", response.data);
    },
    async loadPictures({ commit }) {
      this.state.loadingPictures = true;
      const response = await PlaceholderService.GetPicturesPlaceholder();
      commit("SET_Pictures", response.data);
    },
    userViewed(e, user) {
      const viewed = this.state.mostVisitedUsers.findIndex(
        (item) => item.id === user.id
      );
      if (viewed === -1) {
        user.views = 1;
        this.state.mostVisitedUsers.push(user);
      } else {
        const userViewed = this.state.mostVisitedUsers.find(
          (item) => item.id === user.id
        );
        userViewed.views++;
        this.state.mostVisitedUsers.sort(
          (userA, userB) =>
            userB.views - userA.views || userA.name.localeCompare(userB.name)
        );
      }
    },
    albumViewed(e, album) {
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
