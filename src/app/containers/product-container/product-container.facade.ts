import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { ProductState } from "../../core/state/buy-product.state";
import { BuyProductService } from "../../core/services/buy-product.service";
import { IBuyProduct } from "../../core/models/buy-product.model";
import { IClientProduct } from "../../core/models/interfaces/client-product.interface";
import { PexelApiService } from '../../core/services/pexel-api.service';
import { StateModel } from "../../core/models/state.model";
import { RenderProductState } from "../../core/state/render-product.state";

@Injectable({
  providedIn: 'root'
})
export class  createProductFacade {
  private subscriptions: Subscription;


  constructor(
    private readonly productState: ProductState,
    private readonly buyProductService: BuyProductService,
    private readonly pexelApiService: PexelApiService,
    private readonly renderProductState: RenderProductState
  ) {
  }

  product$(): Observable<IBuyProduct>{
    return this.productState.productStore().product.$();
  }
  renderProduct$(): Observable<IClientProduct>{
    return this.renderProductState.productRenderStore().renderProduct.$();
  }

  initSubscriptions() {
    this.subscriptions = new Subscription();
  }

  destroySubscription() {
    this.subscriptions.unsubscribe();
  }

  getBooks(): StateModel<IBuyProduct> {
    return this.productState.productStore().product;
  }


  getImages(): void {
    this.productState.productStore().product.$().pipe(
      tap((book) => {
        this.pexelApiService.getImages('1').subscribe((result) => {
          this.renderProductState.productRenderStore().renderProduct.set({product: {...book}, img: result.photos[0].url, alt: result.photos[0].alt});
        });
      })
    ).subscribe();
  }

  postProduct(bookData: IBuyProduct): void {
    if(bookData.libraryType == '0'){
      this.subscriptions.add(
        this.buyProductService.buyBook(bookData).subscribe((result) => {
          this.productState.productStore().product.set(result);
        })
      );
      this.getImages();
    }
    if(bookData.libraryType == '1'){
      this.subscriptions.add(
        this.buyProductService.buyNovel(bookData).subscribe((result) => {
          this.productState.productStore().product.set(result);
        })
      );
      this.getImages();
    }
  }
}
