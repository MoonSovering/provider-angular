import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { ProductState } from "../../core/state/buy-product.state";
import { BuyProductService } from "../../core/services/buy-product.service";
import { IBuyProduct } from "../../core/models/buy-product.model";
import { IClientProduct } from "../../core/models/interfaces/client-product.interface";
import { PexelApiService } from '../../core/services/pexel-api.service';
import { StateModel } from "../../core/models/state.model";
import { RenderProductState } from "../../core/state/render-product.state";
import { AppState } from "../../core/state/app.state";

@Injectable({
  providedIn: 'root'
})
export class  createProductFacade {
  private subscriptions: Subscription;


  constructor(
    private readonly appstate: AppState,
    private readonly buyProductService: BuyProductService,
    private readonly pexelApiService: PexelApiService,
  ) {
  }

  product$(): Observable<IBuyProduct>{
    return this.appstate.product.product.$();
  }
  renderProduct$(): Observable<IClientProduct>{
    return this.appstate.renderProduct.renderProduct.$();
  }

  initSubscriptions() {
    this.subscriptions = new Subscription();
  }

  destroySubscription() {
    this.subscriptions.unsubscribe();
  }

  getBooks(): StateModel<IBuyProduct> {
    return this.appstate.product.product;
  }


  getImages(): void {
    this.appstate.product.product.$().pipe(
      tap((book) => {
        this.pexelApiService.getImages('1').subscribe((result) => {
          this.appstate.renderProduct.renderProduct.set({product: {...book}, img: result.photos[0].url, alt: result.photos[0].alt});
        });
      })
    ).subscribe();
  }

  postProduct(bookData: IBuyProduct): void {
    if(bookData.libraryType == '0'){
      this.subscriptions.add(
        this.buyProductService.buyBook(bookData).subscribe((result) => {
          this.appstate.product.product.set(result);
        })
      );
      this.getImages();
    }
    if(bookData.libraryType == '1'){
      this.subscriptions.add(
        this.buyProductService.buyNovel(bookData).subscribe((result) => {
          this.appstate.product.product.set(result);
        })
      );
      this.getImages();
    }
  }
}
