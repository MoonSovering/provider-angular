import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";


@Injectable({
  providedIn: 'root'
})
export class RegisterApiToUserMapper {
  map(payload: any): IBuyProduct {
    return {
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
      libraryType: payload.libraryType
    }
  }
}
