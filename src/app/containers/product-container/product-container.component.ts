import { Component, Input } from '@angular/core';
import { IBuyProduct } from '../../core/models/buy-product.model';
import { BuyProductComponent } from '../../ui/forms/buy-product/buy-product.component';
import { createProductFacade } from './product-container.facade';
import { ProductComponent } from '../../ui/blocks/product/product.component';
import { AsyncPipe } from '@angular/common';
import { IClientProduct } from '../../core/models/interfaces/client-product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [BuyProductComponent, ProductComponent, AsyncPipe],
  templateUrl: './product-container.component.html',
})
export class ProductContainerComponent {



  @Input() productData: IBuyProduct;
  renderProduct$: Observable<IClientProduct>;


  constructor(private readonly facade: createProductFacade) {
  }


  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initalizeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  postProduct(productData) {
    console.log(productData);
    this.facade.postProduct(productData);
  }
  getImages() {
    this.facade.getImages();
  }

  private initalizeSubscriptions(): void {
    this.renderProduct$ = this.facade.renderProduct$();
  }
}
