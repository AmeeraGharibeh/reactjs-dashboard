import axios from "axios";

const BASE_URL = "https://app.momentoart.com/api/react/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
