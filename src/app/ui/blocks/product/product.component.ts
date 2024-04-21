import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { IClientProduct } from '../../../core/models/interfaces/client-product.interface';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() renderProduct: IClientProduct;

}
