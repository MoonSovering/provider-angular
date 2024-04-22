import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { JsonPipe } from '@angular/common';
import { ListComponent } from '../../elements/list/list.component';

@Component({
  selector: 'app-budget-product-list',
  standalone: true,
  imports: [ListComponent, JsonPipe, LinkedButtonComponent],
  templateUrl: './budget-product-list.component.html',
  styleUrl: './budget-product-list.component.css'
})
export class BudgetProductListComponent {

  @Input() products: IBuyProduct[];
  @Output() captureProduct: EventEmitter<IBuyProduct[]> = new EventEmitter<IBuyProduct[]>();
  redirect: LinkedButton = {
    label: 'Ir a presupuestar',
    link: '/provider/budget/cart'
  }
  selectProducts: IBuyProduct[] = [];
  disabledProducts: Set<IBuyProduct> = new Set();

  getProduct(product: IBuyProduct) {
    this.selectProducts.push(product);
    this.captureProduct.emit(this.selectProducts);
    this.disabledProducts.add(product);
  }

  deleteProduct(product: IBuyProduct) {
    this.selectProducts= this.selectProducts.filter((item) => item !== product);
    this.captureProduct.emit(this.selectProducts);
    this.disabledProducts.delete(product);
  }

  addDisableButton(product: IBuyProduct): boolean {
    return this.disabledProducts.has(product);
}

deleteDisableButton(product: IBuyProduct): boolean {
    return !this.disabledProducts.has(product);
}
}
