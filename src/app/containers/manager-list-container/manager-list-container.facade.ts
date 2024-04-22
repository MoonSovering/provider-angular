import { Injectable } from "@angular/core";
import { Observable, Subscription, map, mergeMap, tap } from "rxjs";
import { ManagerListService } from "../../core/services/manager-list.service";
import { GetBooksService } from "../../core/services/get-books.service";
import { AppState } from '../../core/state/app.state';
import { IGetProducts } from "../../core/models/interfaces/get-products.interface";
import { IBuyProduct } from "../../core/models/buy-product.model";
import { PexelApiService } from "../../core/services/pexel-api.service";
import { IPexelImages } from "../../core/models/interfaces/images-api.interfaces";



@Injectable({
  providedIn: 'root'
})
export class RegisterContainerFacade {

  private subscriptions: Subscription;

  constructor(
    private readonly getBooksService: GetBooksService,
    private readonly appState: AppState,
    private readonly pexelApiService: PexelApiService,
  ){
  }

  products$(): Observable<IBuyProduct[]> {
    return this.appState.saveProducts.products.$();
  }
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  private getImages(products: IBuyProduct[]): Observable<IBuyProduct[]> {

    return this.pexelApiService.getImages(products.length.toString()).pipe(
      map((images: IPexelImages) => {
        return products.map((product: IBuyProduct, index) => ({
          ...product,
          photo: images.photos[index]
        }));
      }),
    )
  }

  fillShoppingCar(cartProducts: IBuyProduct[]): void{
    this.appState.shoppingCart.products.set(cartProducts);
  }

  getAllBooks(): void {
    this.subscriptions.add(
      this.getBooksService.getAllBooks().pipe(
        mergeMap( (products) => this.getImages(products)),
        tap(this.appState.saveProducts.products.set.bind(this))
      ).subscribe()
    );
  }

}
