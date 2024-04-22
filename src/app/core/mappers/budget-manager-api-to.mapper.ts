import { Injectable } from "@angular/core";
import { BudgetProduct, IBudgetManager } from "../models/budget-manager.model";
import { Product } from "../models/list-manager-response.model";


@Injectable({
  providedIn: 'root'
})
export class BudgetMapperHtpp {
  map(payload: any): IBudgetManager {
    console.log('payload', payload.products)
    const products = payload.products.map((product: any) => {
      return {
        productId: product.id,
      }
    });
    return {
      products,
      budget: payload.budget
    }
    }
  }
