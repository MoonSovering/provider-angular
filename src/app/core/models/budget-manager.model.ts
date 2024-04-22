import { IBuyProduct } from "./buy-product.model";

export interface IBudgetManager {
  products: IBuyProduct[];
  budget:   number;
}
