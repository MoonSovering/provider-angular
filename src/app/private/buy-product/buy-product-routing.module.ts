import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from '../../containers/product-container/product-container.component';
import { ProductLayoutComponent } from '../../ui/layouts/product-layout/product-layout.component';

const routes: Routes = [
  {
    path:'',
    component: ProductLayoutComponent,
    children: [
      {
        path: '',
        component: ProductContainerComponent,
        outlet: 'product-form'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyProductRoutingModule { }
