import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";



@Injectable({
  providedIn: 'root'
})
export class BudgetState {
  private products$: BehaviorSubject<IBuyProduct[]> = new BehaviorSubject<IBuyProduct[]>([]);

  constructor(private readonly factory: StateFactory) { }

  saveProducts() {
    return {
      products: this.factory.state(this.products$),
    }
  }
}
