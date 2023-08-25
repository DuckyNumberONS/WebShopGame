import { Order } from "@/lib/domain/order";
import axios from "../utils/index";

export const payOrder = async (data: Order) => {
  try {
    const response = await axios.post("/paypal/pay", data);
    const order = response.data;
    return order;
  } catch (error) {
    console.error(error);
  }
};
