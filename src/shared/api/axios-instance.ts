import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import qs from "qs";

const BASE_URL = "api";

export const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "comma" }),
  }),
  { ignoreParams: true },
);
