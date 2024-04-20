import { Injectable } from "@angular/core";
import { IManagerList } from "../models/manager-list.model";


@Injectable({
  providedIn: 'root'
})
export class ManagerListMapper {
  map(payload: any): IManagerList {
    return {
      products: [
        {
          productId: payload.productId,
          amount:    payload.amount
        }
      ]
    }
  }
}
