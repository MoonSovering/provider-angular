import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../ui/layouts/auth-layout/auth-layout.component';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginContainerComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent,
        outlet: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
