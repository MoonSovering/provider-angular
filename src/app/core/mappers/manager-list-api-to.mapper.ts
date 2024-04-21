import { Injectable } from "@angular/core";
import { IListResponseManager } from "../models/list-manager-response.model";


@Injectable({
  providedIn: 'root'
})
export class ManagerListMapper {
  map(payload: any): IListResponseManager {
    const products = payload.products.map((product) => {
      return {
        name: product.name,
        price: product.price,
        type: product.type,
      }
    });
    return {
      products,
      totalAmount: payload.totalAmount,
      totalWithDiscount: payload.totalWithDiscount,
    }
  }
}
