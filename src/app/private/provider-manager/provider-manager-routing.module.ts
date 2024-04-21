import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerLayoutComponent } from '../../ui/layouts/manager-layout/manager-layout.component';
import { ManagerListContainerComponent } from '../../containers/manager-list-container/manager-list-container.component';
import { ShoppingManagerContainerComponent } from '../../containers/shopping-manager-container/shopping-manager-container.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerLayoutComponent,
    children: [
      {
        path: '',
        component: ManagerListContainerComponent,
        outlet: 'book-info'
      }
    ]
  },
  {
    path: 'shopping',
    component: ManagerLayoutComponent,
    children: [
      {
        path: '',
        component: ShoppingManagerContainerComponent,
        outlet: 'shopping-cart'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderManagerRoutingModule { }
