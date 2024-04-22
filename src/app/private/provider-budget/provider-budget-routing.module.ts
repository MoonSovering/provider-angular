import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetLayoutComponent } from '../../ui/layouts/budget-layout/budget-layout.component';
import { BudgetManagerContainerComponent } from '../../containers/budget-manager-container/budget-manager-container.component';
import { BudgetCartContainerComponent } from '../../containers/budget-cart-container/budget-cart-container.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetLayoutComponent,
    children: [
      {
        path: '',
        component: BudgetManagerContainerComponent,
        outlet: 'budget-info'
      }
    ]
  },
   {
     path: 'cart',
     component: BudgetLayoutComponent,
     children: [
       {
        path: '',
        component: BudgetCartContainerComponent,
         outlet: 'budget-cart'
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderBudgetRoutingModule { }
