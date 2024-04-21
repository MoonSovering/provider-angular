import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";


@Injectable({
  providedIn: 'root'
})
export class BuyProductMapper {
  map(payload: any): IBuyProduct {
    return {
      id: payload.id,
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
      libraryType: payload.libraryType
    }
  }
}
