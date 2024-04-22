import { Injectable } from "@angular/core";
import { IBudgetManager } from "../models/budget-manager.model";


@Injectable({
  providedIn: 'root'
})
export class BudgetMapper {
  map(payload: any): IBudgetManager {
    return {
      products: [
        {
          id: payload.id,
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          libraryType: payload.libraryType

        }
      ],
      budget: payload.budget
    }
  }
}
