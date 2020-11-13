import axios from "axios";

const instance = axios.create({
  // the API (cloud function) URL
  baseURL: "...",
});

export default instance;
