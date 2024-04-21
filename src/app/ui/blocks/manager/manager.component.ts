import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { ListComponent } from '../../elements/list/list.component';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../elements/button/button.component';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ListComponent, JsonPipe, LinkedButtonComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

  @Input() products: IBuyProduct[];
  @Output() captureProduct: EventEmitter<IBuyProduct[]> = new EventEmitter<IBuyProduct[]>();
  redirect: LinkedButton = {
    label: 'Ir al carrito',
    link: '/provider/manager/shopping'
  }
  selectProducts: IBuyProduct[] = [];
  disabledProducts: Set<IBuyProduct> = new Set();

  getProduct(product: IBuyProduct) {
    this.selectProducts.push(product);
    this.captureProduct.emit(this.selectProducts);
    this.disabledProducts.add(product);
    console.log("fiorst", this.selectProducts);
  }

  deleteProduct(product: IBuyProduct) {
    this.selectProducts= this.selectProducts.filter((item) => item !== product);
    this.captureProduct.emit(this.selectProducts);
    console.log("second", this.selectProducts);
    this.disabledProducts.delete(product);
  }

  addDisableButton(product: IBuyProduct): boolean {
    return this.disabledProducts.has(product);
}

deleteDisableButton(product: IBuyProduct): boolean {
    return !this.disabledProducts.has(product);
}


}
