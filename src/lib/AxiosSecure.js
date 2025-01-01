import axios from "axios";

export const AxiosSecure = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  // baseURL: "https://portfolio-server-sabbir.vercel.app/api/v1",
});

// Add a request interceptor
AxiosSecure.interceptors.request.use(
  (config) => {
    return config;
  },
  async function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosSecure.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
