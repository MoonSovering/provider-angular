import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { ListComponent } from '../../elements/list/list.component';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [ListComponent, JsonPipe, ButtonComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

  @Input() products: IBuyProduct[];
  @Output() captureProduct: EventEmitter<IBuyProduct[]> = new EventEmitter<IBuyProduct[]>();
  selectProducts: IBuyProduct[] = [];
  isButtonDisabled: boolean = true;

  getProduct(product: IBuyProduct) {
    this.selectProducts.push(product);
    this.captureProduct.emit(this.selectProducts);
    this.isButtonDisabled = false;
  }
}
