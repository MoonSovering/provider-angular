import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { ListComponent } from '../../elements/list/list.component';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { IManagerList } from '../../../core/models/manager-list.model';
import { ParagraphComponent } from '../../elements/paragraph/paragraph.component';
import { JsonPipe } from '@angular/common';
import { IListResponseManager } from '../../../core/models/list-manager-response.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ListComponent, LinkedButtonComponent, ParagraphComponent, JsonPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  @Output() captureProduct: EventEmitter<IManagerList> = new EventEmitter<IManagerList>();
  @Input() managerProductResponse: IListResponseManager;
  @Input() products: IBuyProduct[];
  redirect: LinkedButton = {
    label: 'Go to store',
    link: '/provider/manager'
  }

  cartItems: IManagerList = {products: []};
  disabledProducts: Set<IBuyProduct> = new Set();

  increaseAmount(product: IBuyProduct): void {
    const cartItem = this.cartItems.products.find((item) => item.productId === product.id);
    if(cartItem) {
      cartItem.amount +=1;
    }
    if(cartItem === undefined) {
      this.cartItems.products.push({productId: product.id, amount: 1});
      this.disabledProducts.add(product);
    }
  }

  decreaseAmount(product: IBuyProduct): void {
    const cartItem = this.cartItems.products.find((item) => item.productId === product.id);
    if(cartItem){
      cartItem.amount -=1;
    }
    if(cartItem.amount === 0){
      this.cartItems.products = this.cartItems.products.filter((item) => item.productId !== product.id);
      this.disabledProducts.delete(product);
    }
  }
  getCartItemAmount(product: IBuyProduct): number {
    const cartItem = this.cartItems.products.find((item) => item.productId === product.id);
    return cartItem ? cartItem.amount : 0;
  }

  updateItemPrice(amount: number, price: string): string{
    return (amount * parseFloat(price)).toFixed(2);
  }
  deteleDisableButton(product: IBuyProduct): boolean {
    return !this.disabledProducts.has(product);
  }

  emitCartItems(): void {
    console.log(this.cartItems);
    this.captureProduct.emit(this.cartItems);
  }
}
