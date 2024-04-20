import { Injectable } from "@angular/core";
import { IBuyProduct } from "../models/buy-product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";



@Injectable({
  providedIn: 'root'
})
export class bookState {
  private book$: BehaviorSubject<IBuyProduct> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  bookStore() {
    return {
      book: this.factory.state(this.book$),
    }
  }
}
