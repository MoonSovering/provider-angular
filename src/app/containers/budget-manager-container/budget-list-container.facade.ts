import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { GetBooksService } from "../../core/services/get-books.service";
import { AppState } from "../../core/state/app.state";
import { PexelApiService } from "../../core/services/pexel-api.service";
import { IBuyProduct } from "../../core/models/buy-product.model";


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


  fillBudgetCart(cartProducts: IBuyProduct[]): void{
    this.appState.budgetCart.products.set(cartProducts);
  }

  getAllBooks(): void {
    this.subscriptions.add(
      this.getBooksService.getAllBooks().pipe(
        tap(this.appState.saveProducts.products.set.bind(this))
      ).subscribe()
    );
  }
}
