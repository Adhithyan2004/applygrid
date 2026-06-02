import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const getDashboard = async () => {
  const response = await api.get("/dashboard");

  return response.data;
};
