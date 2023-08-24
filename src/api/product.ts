import { User } from "@/lib/domain/user";
import axios from "../utils/index";

export const getListProduct = async () => {
  try {
    const response = await axios.get("/product/getAllProducs");
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};
