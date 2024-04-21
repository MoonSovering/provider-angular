

export interface IListResponseManager {
  products: Product[];
  totalAmount: number;
  totalWithDiscount: number;
}

export interface Product {
  name:        string;
  price:       number;
  type: string;
}

