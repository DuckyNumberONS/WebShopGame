export interface Order {
  username: string;
  products: ProductOrder[];
  totalOrder: number;
}
export interface ProductOrder {
  id: string;
  quantity: number;
  total: number;
}
