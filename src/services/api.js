import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: "https://62dcd6624438813a261a140e.mockapi.io/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    }
  });
};
