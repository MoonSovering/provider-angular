export interface IBudgetManager {
  products: Product[];
  budget:   number;
}

interface Product {
  productId: string;
}
