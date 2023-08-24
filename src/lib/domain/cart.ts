export interface CartItem {
  _id: string;
  quantity: number;
  total: number;
}
export type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};
