import { Injectable } from "@angular/core";
import { IBudgetManager } from "../models/budget-manager.model";


@Injectable({
  providedIn: 'root'
})
export class RegisterApiToUserMapper {
  map(payload: any): IBudgetManager {
    return {
      products: [
        {
          productId: payload.productId
        }
      ],
      budget: payload.budget
    }
  }
}
