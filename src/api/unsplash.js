import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6uGYYlJOPI7xFlkgxPHa_nkjz21L20-yrAnj0i4q9ys",
  },
});
