import { Injectable } from "@angular/core";
import { Observable, Subscription, map, mergeMap, tap } from "rxjs";
import { GetBooksService } from "../../core/services/get-books.service";
import { AppState } from "../../core/state/app.state";
import { PexelApiService } from "../../core/services/pexel-api.service";
import { IBuyProduct } from "../../core/models/buy-product.model";
import { IPexelImages } from "../../core/models/interfaces/images-api.interfaces";


@Injectable({
  providedIn: 'root'
})
export class BudgetListFacade{
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

  fillBudgetCart(cartProducts: IBuyProduct[]): void{
    this.appState.budgetCart.products.set(cartProducts);
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
