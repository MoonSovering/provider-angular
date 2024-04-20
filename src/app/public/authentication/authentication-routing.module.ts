import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';
import { AuthLayoutComponent } from '../../ui/layouts/auth-layout/auth-layout.component';
import { RegisterContainerComponent } from '../../containers/register-container/register-container.component';
import {  PublicProviderGuard } from './public-provider.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginContainerComponent,
        outlet: 'auth-form'
      }
    ], canActivate: [PublicProviderGuard]
  },
  {
    path: 'sign-up',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: RegisterContainerComponent,
        outlet: 'auth-form'
      }
    ], canActivate: [PublicProviderGuard]
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
