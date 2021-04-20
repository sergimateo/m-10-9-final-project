import ApiPlaceholder from "./ApiPlacehorder.vue";

export default {
  GetAlbumsPlaceholder() {
    return ApiPlaceholder().get("/albums");
  },
  GetPicturesPlaceholder() {
    return ApiPlaceholder.get("/pictures");
  },
  GetUsersPlaceholder() {
    return ApiPlaceholder.get("/users");
  },
};
