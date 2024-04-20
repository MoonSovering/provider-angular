import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'buy-product',
    loadChildren: () => import('./buy-product/buy-product.module')
      .then(module => module.BuyProductModule),
  },
  {
    path: 'manager',
    loadChildren: () => import('./provider-manager/provider-manager.module')
      .then(module => module.ProviderManagerModule),
  },
  {
    path: 'budget',
    loadChildren: () => import('./provider-budget/provider-budget.module')
      .then(module => module.ProviderBudgetModule),
  },
  {
    path: '**',
    redirectTo: 'buy-product'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
