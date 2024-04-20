import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard {
  canActivate: CanActivateFn;

  constructor() {
    this.canActivate = (route, state) => {
      return true;
    };
  }
}
