import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";


@Injectable({
  providedIn: 'root'
})
export class getAllBooksApiToMapper {
  map(payload: any[]): IBuyProduct[] {
    return payload.map((product: any) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      libraryType: product.type
    }))
  }
}
