import axios from "axios";

export function api() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "/api",
    params: {
      token,
    },
  });
}
