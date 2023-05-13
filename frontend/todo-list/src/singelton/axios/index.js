import axios from "axios";

//apply base url for axios
import { API_URL } from "../../constants/api";

const axiosApi = axios.create({
  baseURL: API_URL,
});

//pass new generated access token here
export const setHeaders = (AUTH_TOKEN) => {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
};

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url) {
  const res = await axiosApi.get(url);
  return res.data;
}

export async function post(url, data, config = {}) {
  const res = await axiosApi.post(url, { ...data }, { ...config });
  return res.data;
}

export async function put(url, data, config = {}) {
  const res = await axiosApi.put(url, { ...data }, { ...config });
  return res.data;
}

export async function patch(url, data, config = {}) {
  const res = axiosApi.patch(url, { ...data }, { ...config });
  return res.data;
}

export async function del(url, config = {}) {
  const res = await axiosApi.delete(url, { ...config });
  return res.data;
}

// base service and interceptor declaration
