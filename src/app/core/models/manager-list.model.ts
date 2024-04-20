export interface IManagerList {
  products: Product[];
}

interface Product {
  productId: string;
  amount:    number;
}
