import axios from "axios";
import { CreateApplication, UpdateApplicationPayload } from "../types/types";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

// APIS

// Dashboard API
export const getDashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};

// Applications API
export const getApplications = async () => {
  const applications = await api.get("/applications");
  return applications.data;
};

// Delete API
export const deleteApplication = async (id: string) => {
  const response = await api.delete(`/applications/${id}`);
  return response.data;
};

// Post application
export const createApplication = async (data: CreateApplication) => {
  const response = await api.post("/applications", data);
  return response.data;
};

// Update Application
export const updateApplication = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateApplicationPayload;
}) => {
  const response = await api.patch(`/applications/${id}`, data);
  return response.data;
};

// Catch 401 or 403 error and refresh the accesstoken using refresh token
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
