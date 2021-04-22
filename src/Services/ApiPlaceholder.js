/* eslint-disable prettier/prettier */
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    header: {
      accept: "application/json",
      "content-type": "application/json",
    },
  });
};
