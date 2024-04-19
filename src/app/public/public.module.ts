import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AuthLayoutComponent } from '../ui/layouts/auth-layout/auth-layout.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AuthLayoutComponent,
  ]
})
export class PublicModule { }
