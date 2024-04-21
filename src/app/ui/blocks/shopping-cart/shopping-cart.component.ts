import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { ListComponent } from '../../elements/list/list.component';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { IManagerList } from '../../../core/models/manager-list.model';
import { ParagraphComponent } from '../../elements/paragraph/paragraph.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ListComponent, LinkedButtonComponent, ParagraphComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  @Output() captureProduct: EventEmitter<IManagerList[]> = new EventEmitter<IManagerList[]>();
  @Input() products: IBuyProduct[];
  redirect: LinkedButton = {
    label: 'Go to store',
    link: '/provider/manager'
  }

  cartItems: IManagerList[] = [];
  disabledProducts: Set<IBuyProduct> = new Set();

  increaseAmount(product: IBuyProduct): void {
    const cartItem = this.cartItems.find((item) => item.productId === product.id);
    if(cartItem) {
      cartItem.amount +=1;
    }
    if(cartItem === undefined) {
      this.cartItems.push({productId: product.id, amount: 1});
      this.disabledProducts.add(product);
    }
  }

  decreaseAmount(product: IBuyProduct): void {
    const cartItem = this.cartItems.find((item) => item.productId === product.id);
    if(cartItem){
      cartItem.amount -=1;
    }
    if(cartItem.amount === 0){
      this.cartItems = this.cartItems.filter((item) => item.productId !== product.id);
      this.disabledProducts.delete(product);
    }
  }
  getCartItemAmount(product: IBuyProduct): number {
    const cartItem = this.cartItems.find((item) => item.productId === product.id);
    return cartItem ? cartItem.amount : 0;
  }

  updateItemPrice(amount: number, price: string): string{
    return (amount * parseFloat(price)).toFixed(2);
  }
  deteleDisableButton(product: IBuyProduct): boolean {
    return !this.disabledProducts.has(product);
  }

  emitCartItems(): void {
    this.captureProduct.emit(this.cartItems);
  }
}
