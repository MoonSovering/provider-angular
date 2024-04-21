import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { AuthService } from "../../core/services/auth.service";
import { ILoginUser } from "../../core/models/interfaces/login-user.interface";
import { AppState } from "../../core/state/app.state";
import { Router } from "@angular/router";
import { IUser } from "../../core/models/user.model";


@Injectable({
  providedIn: 'root'
})
export class LoginContainerFacade {

  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly AuthService: AuthService,
    private readonly router: Router
  ){}

  user$(): Observable<ILoginUser> {
    return this.appState.login.user.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
  getUser(formData: IUser): void {
    this.subscriptions.add(
      this.AuthService.userLogin(formData).pipe(
        tap(this.appState.login.user.set.bind(this)),
        tap(() => this.router.navigate(['/provider']) )
      ).subscribe()
    );
  }
}
