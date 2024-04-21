import { Component } from '@angular/core';
import { ShoppingManagerFacade } from './shopping-manager.facade';
import { Observable } from 'rxjs';
import { IBuyProduct } from '../../core/models/buy-product.model';
import { AsyncPipe } from '@angular/common';
import { ShoppingCartComponent } from '../../ui/blocks/shopping-cart/shopping-cart.component';
import { IManagerList } from '../../core/models/manager-list.model';
import { IListResponseManager } from '../../core/models/list-manager-response.model';

@Component({
  selector: 'app-shopping-manager-container',
  standalone: true,
  imports: [ShoppingCartComponent, AsyncPipe],
  templateUrl: './shopping-manager-container.component.html',
})
export class ShoppingManagerContainerComponent {

  cartProduts$: Observable<IBuyProduct[]>;
  wishListResponse$: Observable<IListResponseManager>;
  managerResponseProduct$: Observable<IListResponseManager>;

  constructor(
    private readonly facade: ShoppingManagerFacade
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
    this.wishListResponse$ = this.facade.wishListResponse$();
    this.managerResponseProduct$ = this.facade.managerResponseProduct$();
  }

  captureWishList(wishList: IManagerList): void {
    this.facade.postManagerList(wishList);
  }
}
