import { Component } from '@angular/core';
import {  ShoppingCartComponent } from '../../ui/blocks/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-shopping-manager-container',
  standalone: true,
  imports: [ShoppingCartComponent],
  templateUrl: './shopping-manager-container.component.html',
})
export class ShoppingManagerContainerComponent {

}
