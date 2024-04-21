import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IGetProducts } from "../models/interfaces/get-products.interface";



@Injectable({
  providedIn: 'root'
})
export class saveProductsState {
  private products$: BehaviorSubject<IBuyProduct[]> = new BehaviorSubject<IBuyProduct[]>([]);

  constructor(private readonly factory: StateFactory) { }

  saveProducts() {
    return {
      products: this.factory.state(this.products$),
    }
  }
}
