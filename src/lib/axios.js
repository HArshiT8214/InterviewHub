import axios from "axios";
import { getAuth } from "@clerk/clerk-react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ✅ Attach Clerk token to every request
axiosInstance.interceptors.request.use(async (config) => {
  const auth = getAuth();
  const token = await auth?.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
