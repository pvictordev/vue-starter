import axios, { type AxiosInstance } from "axios";
import type { App } from "vue";

export const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || window.location.origin + "/api",
  // withCredentials: true, // Uncomment if needed
});

export default class HTTPProvider {
  provide(app: App) {
    // app.config.globalProperties.$http = http; // Optional: if you want to access it via this.$http in Options API
    this.boot();
  }

  boot() {
    this.handleRequest();
    this.handleResponse();
  }

  handleRequest() {
    http.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  handleResponse() {
    http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          // Handle 401
        } else if (error.response?.status === 403) {
          // Handle 403
        } else {
          return Promise.reject(error);
        }
      }
    );
  }
}
