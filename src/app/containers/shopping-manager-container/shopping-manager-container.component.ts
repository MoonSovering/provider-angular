import { Component } from '@angular/core';
import { ShoppingManagerFacade } from './shopping-manager.facade';
import { Observable } from 'rxjs';
import { IBuyProduct } from '../../core/models/buy-product.model';
import { AsyncPipe } from '@angular/common';
import { ShoppingCartComponent } from '../../ui/blocks/shopping-cart/shopping-cart.component';
import { IManagerList } from '../../core/models/manager-list.model';

@Component({
  selector: 'app-shopping-manager-container',
  standalone: true,
  imports: [ShoppingCartComponent, AsyncPipe],
  templateUrl: './shopping-manager-container.component.html',
})
export class ShoppingManagerContainerComponent {

  cartProduts$: Observable<IBuyProduct[]>;

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
  }

  captureWishList(wishList: IManagerList[]): void {
    console.log(wishList);
  }
}
