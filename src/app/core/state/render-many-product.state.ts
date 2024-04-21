import { Injectable } from "@angular/core";
import { IClientProduct } from "../models/interfaces/client-product.interface";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";


@Injectable({
  providedIn: 'root'
})
export class RenderManyProductState {
  private renderManyProducts$: BehaviorSubject<IClientProduct[]> = new BehaviorSubject<IClientProduct[]>(null);

  constructor(private readonly factory: StateFactory) { }

  productRenderStore() {
    return {
      renderManyProducts: this.factory.state(this.renderManyProducts$),
    }
  }
}
