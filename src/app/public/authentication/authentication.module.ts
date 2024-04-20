import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationGuard } from './authentication.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  providers: [AuthenticationGuard]
})
export class AuthenticationModule { }
