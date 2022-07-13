import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

export function get(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}
export function post(url, data, config) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}
export function del(url, config = {}) {
  return axios.delete(url, (config = {}));
}
export function put(url, data, config) {
  return axios
    .put(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
export function patch(url, data, config) {
  return axios
    .patch(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
