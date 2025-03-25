import axios, { AxiosInstance } from "axios";
import { getCookie } from "./cookie";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    accessToken: await getCookie("accessToken"),
  },
});
