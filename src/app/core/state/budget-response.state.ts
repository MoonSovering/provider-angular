import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IClientProduct } from "../models/interfaces/client-product.interface";
import { IBudgetResponse } from "../models/budget-manager-response.model";



@Injectable({
  providedIn: 'root'
})
export class BudgetResponseState {
  private product$: BehaviorSubject<IBudgetResponse[]> = new BehaviorSubject<IBudgetResponse[]>(null);

  constructor(private readonly factory: StateFactory) { }

  productStore() {
    return {
      product: this.factory.state(this.product$),
    }
  }
}
