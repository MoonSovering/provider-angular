import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { IBuyProduct } from "../../core/models/buy-product.model";
import { BudgetManagerService } from "../../core/services/budget-manager.service";
import { IBudgetManager } from "../../core/models/budget-manager.model";
import { IBudgetResponseHtpp } from "../../core/models/interfaces/budget-response.interface";
import { IBudgetResponse } from "../../core/models/budget-manager-response.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetManagerFacade {
  private subscriptions: Subscription;
  constructor(
    private readonly appState: AppState,
    private readonly budgetManagerService: BudgetManagerService
  ) {}

  cartProducts$(): Observable<IBuyProduct[]> {
    return this.appState.budgetCart.products.$();
  }

  budgetResponse$(): Observable<IBudgetResponse[]> {
    return this.appState.budgetResponse.product.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  postBudgetList(budgetData: IBudgetResponseHtpp): void {
    this.subscriptions.add(
      this.budgetManagerService.postBudgetManager(budgetData).subscribe(
        (result) => {
          this.appState.budgetResponse.product.set(result);
        }
      )
    );
  }
}
