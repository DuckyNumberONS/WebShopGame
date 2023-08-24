import axios from "axios";
import { API } from "@/lib/constants";

const instance = axios.create({
  baseURL: API,
  timeout: 5000,
});

export default instance;
