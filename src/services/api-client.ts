import axios, { CanceledError } from "axios";

export { CanceledError };

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "34e5c90684ad498a8206e12416449932",
  },
});
