import { Component } from '@angular/core';
import { BudgetCardComponent } from '../../ui/blocks/budget-card/budget-card.component';
import { BudgetListFacade } from '../budget-manager-container/budget-list-container.facade';
import { IBuyProduct } from '../../core/models/buy-product.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BudgetManagerFacade } from './budget-cart.facade';
import { IBudgetManager } from '../../core/models/budget-manager.model';
import { IBudgetResponseHtpp } from '../../core/models/interfaces/budget-response.interface';
import { IBudgetResponse } from '../../core/models/budget-manager-response.model';

@Component({
  selector: 'app-budget-cart-container',
  standalone: true,
  imports: [BudgetCardComponent, AsyncPipe],
  templateUrl: './budget-cart-container.component.html',
})
export class BudgetCartContainerComponent {
  cartProduts$: Observable<IBuyProduct[]>;
  budgetResponse$: Observable<IBudgetResponse[]>;

  constructor(
    private readonly facade: BudgetManagerFacade
  ){}

  ngOnInit(): void {
    this.initializeSubscription();
    this.facade.initSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  private initializeSubscription(): void {
    this.cartProduts$ = this.facade.cartProducts$();
    this.budgetResponse$ = this.facade.budgetResponse$();
  }

  captureWishList(wishList: IBudgetResponseHtpp): void {
    this.facade.postBudgetList(wishList);
  }
}
