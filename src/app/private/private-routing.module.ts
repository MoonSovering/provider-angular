import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderLayoutComponent } from '../ui/layouts/provider-layout/provider-layout.component';
import { HeaderComponent } from '../ui/blocks/header/header.component';

const routes: Routes = [
  {
    path: 'provider',
    component: ProviderLayoutComponent,
    children: [
      {
        path: '', component: HeaderComponent, outlet: 'header'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
