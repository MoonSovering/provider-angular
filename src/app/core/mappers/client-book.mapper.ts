import { Injectable } from "@angular/core";
import { IClientProduct } from "../models/interfaces/client-product.interface";


@Injectable({
  providedIn: 'root'
})
export class BuyProductMapper {
  map(payload: any): IClientProduct {
    return {
      product: {
        id: payload.id,
        name: payload.name,
        price: payload.price,
        stock: payload.stock,
        libraryType: payload.libraryType
      },
      img: payload.img,
      alt: payload.alt
    }
  }
}
