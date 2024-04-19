import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  set<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string):void {
    localStorage.removeItem(key);
  }
}


// ////////////////////
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, Observer } from 'rxjs';
// import { RolEnum } from '../core/enums/rol.enum';
// import { AppState } from '../core/state/app.state';


// @Injectable({
//   providedIn: 'root',
// })
// export class PrivateGuard implements CanActivate {
//   constructor(
//     private appState: AppState,
//     private route: Router,
//   ) { }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return new Observable((observer: Observer<boolean>) => {
//       this.appState.users.currentUser.$().subscribe((user) => {
//         user?.profile?.rol === RolEnum.admin
//            user?.profile?.rol === RolEnum.graduate
//            user?.profile?.rol === RolEnum.current ? this.approvedVisit(observer) : this.rejectedVisit(observer, state);
//       });
//     });
//   }

//   private approvedVisit(observer: Observer<boolean>): void {
//     observer.next(true);
//     observer.complete();
//   }

//   private rejectedVisit(observer: Observer<boolean>, state: RouterStateSnapshot): void {
//     this.route.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
//     observer.next(false);
//     observer.complete();
//   }
// }
