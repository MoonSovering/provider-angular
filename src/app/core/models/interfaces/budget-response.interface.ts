import { IBuyProduct } from "../buy-product.model";


export interface IBudgetResponseHtpp {
  products: IBuyProduct[];
  budget: number;
}


