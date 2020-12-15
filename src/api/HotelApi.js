import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/",
});

const storedUser = localStorage.getItem("loggedInUser");

const loggedInUser = JSON.parse(storedUser || '""');

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${loggedInUser.token}`,
  };

  return config;
});

export default api;
