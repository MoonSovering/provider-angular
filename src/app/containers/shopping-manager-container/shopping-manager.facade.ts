import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { IBuyProduct } from "../../core/models/buy-product.model";
import { ManagerListService } from "../../core/services/manager-list.service";
import { IManagerList } from "../../core/models/manager-list.model";


@Injectable({
  providedIn: 'root'

})
export class ShoppingManagerFacade {

  private subscriptions: Subscription;
  constructor(
    private readonly appState: AppState,
    private readonly managerListService: ManagerListService,
  ) {}

  cartProducts$(): Observable<IBuyProduct[]> {
    return this.appState.shoppingCart.products.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  postManagerList(managerListData: IManagerList[]): void {
    this.subscriptions.add(
      this.managerListService.postManagerList(managerListData).subscribe()
    );
  }
}
