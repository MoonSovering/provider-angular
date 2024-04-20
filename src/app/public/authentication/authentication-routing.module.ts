import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';
import { AuthLayoutComponent } from '../../ui/layouts/auth-layout/auth-layout.component';
import { RegisterContainerComponent } from '../../containers/register-container/register-container.component';
import { AuthenticationGuard } from './authentication.guard';

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
    ], canActivate: [AuthenticationGuard]
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
