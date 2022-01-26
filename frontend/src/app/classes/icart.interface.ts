export interface ICart {
  id: number; // User id
  products: {
    id: number;
    quantity: number;
  }[];
}
