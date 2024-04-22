import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { IBudgetResponse } from '../../../core/models/budget-manager-response.model';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { IBudgetManager } from '../../../core/models/budget-manager.model';
import { ParagraphComponent } from '../../elements/paragraph/paragraph.component';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { ListComponent } from '../../elements/list/list.component';
import { InputComponent } from '../../elements/input/input.component';
import { LabelComponent } from '../../elements/label/label.component';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-budget-card',
  standalone: true,
  imports: [ListComponent, LinkedButtonComponent, ParagraphComponent, JsonPipe, InputComponent, LabelComponent, TitleComponent, FormsModule],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.css'
})
export class BudgetCardComponent {
  @Output() captureProduct: EventEmitter<IBudgetManager> = new EventEmitter<IBudgetManager>();
  @Input() managerProductResponse: IBudgetResponse[];
  @Input() products: IBuyProduct[];
  redirect: LinkedButton = {
    label: 'Go to store',
    link: '/provider/budget'
  }
  budget: number = 0;

  cartItems: IBudgetManager;
  disabledProducts: Set<IBuyProduct> = new Set();

  setBudget(): void{
    this.cartItems = {
      products: this.products,
      budget: this.budget
    }
  }

  emitCartItems(): void {
    this.setBudget( );
    this.captureProduct.emit(this.cartItems);
  }
}
