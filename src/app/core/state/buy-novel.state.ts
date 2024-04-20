import { Injectable } from "@angular/core";
import { StateFactory } from "./factory.state";
import { BehaviorSubject } from "rxjs";
import { IBuyProduct } from "../models/buy-product.model";


@Injectable({
  providedIn: 'root'
})
export class novelState {
  private novel$: BehaviorSubject<IBuyProduct> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  novelStore() {
    return {
      novel: this.factory.state(this.novel$),
    }
  }
}
