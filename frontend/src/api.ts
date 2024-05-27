import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
  params: {
    token: token,
  },
});
