import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    header: {
      // eslint-disable-next-line prettier/prettier
      accept: "application/json",
      "content-type": "application/json",
    },
  });
};
