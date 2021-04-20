import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/users",
    // name: "UsersList",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users.vue"),
    children: [
      {
        path: "",
        name: "UsersList",
        component: () =>
          import(/* webpackChunkName: "userslist" */ "../views/UsersList.vue"),
      },
      {
        path: ":username",
        name: "UserDetails",
        component: () =>
          import(
            /* webpackChunkName: "userdetails" */ "../views/UserDetails.vue"
          ),
      },
    ],
  },

  {
    path: "/albums",
    // // name: "AlbumsList",

    component: () =>
      import(/* webpackChunkName: "albums" */ "../views/Albums.vue"),
    children: [
      {
        path: "",
        name: "AlbumsList",
        component: () =>
          import(
            /* webpackChunkName: "albumslist" */ "../views/AlbumsList.vue"
          ),
      },
      {
        path: ":albumtitle",
        name: "AlbumDetails",
        component: () =>
          import(
            /* webpackChunkName: "albumdetails" */ "../views/AlbumDetails.vue"
          ),
      },
    ],
  },
  // {
  //   path: "/dummy",
  //   name: "Dummy",
  //   component: () =>
  //     import(/* webpackChunkName: "dummylist" */ "../views/borrables/DummyList.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
