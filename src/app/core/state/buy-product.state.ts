import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IClientProduct } from "../models/interfaces/client-product.interface";



@Injectable({
  providedIn: 'root'
})
export class ProductState {
  private product$: BehaviorSubject<IBuyProduct> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  productStore() {
    return {
      product: this.factory.state(this.product$),
    }
  }
}
