import { Inject, Injectable } from '@angular/core';
import { CanActivateFn, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, MaybeAsync, GuardResult } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: "root"
})
export class PrivateProviderGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.authService.verifyToken().pipe(
      map(() => {
        this.route.navigate(['/auth/sign-in']);
        return true;
      }),
      catchError(() => of(false))
    );
  }
}
