import { Component, Input } from '@angular/core';
import { BudgetProductListComponent } from '../../ui/blocks/budget-product-list/budget-product-list.component';
import { IBuyProduct } from '../../core/models/buy-product.model';
import { Observable } from 'rxjs';
import { BudgetListFacade } from './budget-list-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-budget-manager-container',
  standalone: true,
  imports: [BudgetProductListComponent, AsyncPipe],
  templateUrl: './budget-manager-container.component.html',
})
export class BudgetManagerContainerComponent {

  @Input() products: IBuyProduct[];
  products$: Observable<IBuyProduct[]>


  constructor( private readonly facade: BudgetListFacade){
  }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getProducts();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  getProducts(): void {
    this.facade.getAllBooks();
  }

  shoppingCar(cartProducts: IBuyProduct[]): void {
    this.facade.fillBudgetCart(cartProducts);
  }
  private initializeSubscriptions(): void {
    this.products$ = this.facade.products$();
  }
}
