import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const getDashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};

export const getApplications = async () => {
  const applications = await api.get("/applications");
  return applications.data;
};
  
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    //TODO remove after testing
    console.log("INTERCEPTOR HIT");
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      //TODO remove after testing
      console.log("TRYING REFRESH");
      originalRequest._retry = true;

      try {
        await api.post("/auth/refresh");

        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
