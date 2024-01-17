import { HttpRoutes } from "../helpers/HttpRoutes";
import axios, { AxiosRequestConfig } from "axios";

var credentialsState = false;

export function setCredentials(state:boolean){
  credentialsState=state;
}
export function getCredentials()
{
  return credentialsState;
}

const axiosClient = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: credentialsState, 
});

export const getRequest = (
  url: keyof HttpRoutes | string,
  config?: AxiosRequestConfig,
) => {
  return axiosClient.get(url, config);
};

export const postRequest = (
  url: keyof HttpRoutes | string,
  body: any,
  params?: AxiosRequestConfig
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

