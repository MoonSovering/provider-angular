import { Component, Input } from '@angular/core';
import { ManagerComponent } from '../../ui/blocks/manager/manager.component';
import { RegisterContainerFacade } from './manager-list-container.facade';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IBuyProduct } from '../../core/models/buy-product.model';

@Component({
  selector: 'app-manager-list',
  standalone: true,
  imports: [ManagerComponent, AsyncPipe],
  templateUrl: './manager-list-container.component.html',
})
export class ManagerListContainerComponent {

  @Input() products: IBuyProduct[];
  products$: Observable<IBuyProduct[]>


  constructor( private readonly facade: RegisterContainerFacade){
  }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getProducts();
    this.getImages();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  getProducts(): void {
    this.facade.getAllBooks();
  }

  getImages(): void {
    this.facade.getImages();
  }

  shoppingCar(cartProducts: IBuyProduct[]): void {
    this.facade.fillShoppingCar(cartProducts);
  }
  private initializeSubscriptions(): void {
    this.products$ = this.facade.products$();
  }
}
