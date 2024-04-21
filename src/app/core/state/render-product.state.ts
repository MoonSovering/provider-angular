import { BehaviorSubject } from "rxjs";
import { IClientProduct } from "../models/interfaces/client-product.interface";
import { StateFactory } from "./factory.state";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class RenderProductState {
  private renderProduct$: BehaviorSubject<IClientProduct> = new BehaviorSubject<IClientProduct>(null);

  constructor(private readonly factory: StateFactory) { }

  productRenderStore() {
    return {
      renderProduct: this.factory.state(this.renderProduct$),
    }
  }
}
