import axios from "axios";

const instance = axios.create({
  // the API (cloud function) URL
  baseURL: "http://localhost:5001/unofficial-5cad3/us-central1/api",

  // TODO: upgrade the plan with blaze then 'deploy functions' && 'npm run build' && 'firebase deploy'.
});

export default instance;
