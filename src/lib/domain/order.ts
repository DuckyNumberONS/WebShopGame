export interface Order {
  _id: string;
  username: string;
  products: ProductOrder[];
  totalOrder: number;
}
export interface ProductOrder {
  _id: string;
  quantity: number;
  total: number;
}
