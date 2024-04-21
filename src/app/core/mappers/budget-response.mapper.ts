import { Injectable } from "@angular/core";
import { IBudgetManager } from "../models/budget-manager.model";
import { IBudgetResponse } from "../models/budget-manager-response.model";


@Injectable({
  providedIn: 'root'
})
export class ResponseBudgetMapper {
  map(payload: any): IBudgetResponse {
    return {
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
      libraryType: payload.type
    }
  }
}
