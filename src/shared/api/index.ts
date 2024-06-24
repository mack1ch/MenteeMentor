import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.menteementor.net";

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export const createAxiosInstance = (token: string) => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const instanceLogged = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

instanceLogged.interceptors.request.use((config) => {
  config.headers.Authorization = `Token ${sessionStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

instanceLogged.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = { ...error.config };
    originalRequest._isRetry = true;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      try {
        const res = await instance.post("/session/refresh");

        sessionStorage.setItem("accessToken", res.data.accessToken);
        return instance.request(originalRequest);
      } catch (error) {
        throw error;
      }
    }
    throw error;
  }
);

export const fetcher = (url: string) =>
  fetch(BASE_URL + url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((res) => res.json());
