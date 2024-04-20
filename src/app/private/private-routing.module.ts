import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../ui/layouts/home-layout/home-layout.component';
import { HomeContainerComponent } from '../containers/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeContainerComponent,
        outlet: 'home-page'
      }
    ]
  },
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
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
