import axios from "axios";
import {
  CreateApplication,
  UpdateApplicationPayload,
  Application,
  User,
} from "../types/types";
import { DashboardData } from "../types/dashboardTypes";
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// APIS

//Get User details
export const getMe = async (): Promise<User> => {
  const response = await api.get<User>("/auth/me");
  return response.data;
};

// Dashboard API
export const getDashboard = async (): Promise<DashboardData> => {
  const response = await api.get<DashboardData>("/dashboard");
  return response.data;
};

// Applications API
export const getApplications = async (): Promise<Application[]> => {
  const applications = await api.get<Application[]>("/applications");
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

export const logout = async () => {
  const response = await api.post("/auth/logout");
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
    if (originalRequest.url === "/auth/refresh") {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      //TODO remove after testing
      console.log("TRYING REFRESH");
      originalRequest._retry = true;

      try {
        await api.post("/auth/refresh");

        return api(originalRequest);
      } catch (refreshError) {
        window.location.href = "/user-login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
