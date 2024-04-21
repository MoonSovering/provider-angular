import { Injectable } from "@angular/core";
import { IListResponseManager } from "../models/list-manager-response.model";


@Injectable({
  providedIn: 'root'
})
export class ManagerListMapper {
  map(payload: any[]): IListResponseManager[] {
    return payload.map((product: any) => ({
      name: product.name,
      price:    product.price,
      type: product.type
    }));
  }
}
