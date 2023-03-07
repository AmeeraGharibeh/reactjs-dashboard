import axios from "axios";

const BASE_URL = "https://6i308wcxza.execute-api.eu-west-1.amazonaws.com/api/react/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
