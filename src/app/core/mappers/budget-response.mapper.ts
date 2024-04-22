import { Injectable } from "@angular/core";
import { IBudgetManager } from "../models/budget-manager.model";
import { IBudgetResponse } from "../models/budget-manager-response.model";


@Injectable({
  providedIn: 'root'
})
export class ResponseBudgetMapper {
  map(payload: any): IBudgetResponse[] {
    return payload.map((result) => {
      return {
        id: result.id,
        name: result.name,
        price: result.price,
        stock: result.stock,
        libraryType: result.libraryType
      }
    });
  }
}
