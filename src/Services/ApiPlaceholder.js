import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    header: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });
};
