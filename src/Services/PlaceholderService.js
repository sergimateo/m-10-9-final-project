import ApiPlaceholder from "./ApiPlaceholder.js";

export default {
  GetAlbumsPlaceholder() {
    return ApiPlaceholder().get("/albums");
  },
  GetPicturesPlaceholder() {
    return ApiPlaceholder().get("/photos");
  },
  GetUsersPlaceholder() {
    return ApiPlaceholder().get("/users");
  },
};
