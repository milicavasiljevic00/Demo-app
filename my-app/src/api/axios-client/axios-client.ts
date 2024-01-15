import { HttpRoutes } from "../enum/HttpRoutes";
import axios, { AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export const getRequest = (
  url: keyof HttpRoutes | string,
  params?: AxiosRequestConfig
) => {
  return axiosClient.get(url, params);
};
export const postRequest = (
  url: keyof HttpRoutes | string,
  body: any,
  params?: {}
) => {
  return axiosClient.post(url, body, params);
};

export const putRequest = (
  url: keyof HttpRoutes | string,
  body: any,
  params?: {}
) => {
  return axiosClient.put(url, body, params);
};

export const deleteRequest = (url: string, params?: {}) => {
  return axiosClient.delete(url, { params });
};
