import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { LoginState } from "../../core/state/login.state";
import { AuthService } from "../../core/services/auth.service";
import { ILoginUser } from "../../core/models/interfaces/login-user.interface";
import { IUserLogin } from "../../core/models/user-login.model";


@Injectable({
  providedIn: 'root'
})
export class LoginContainerFacade {

  private subscriptions: Subscription;

  constructor(
    private readonly loginState: LoginState,
    private readonly AuthService: AuthService
  ){}

  user$(): Observable<ILoginUser> {
    return this.loginState.store().user.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
  getUser(formData: IUserLogin): void {
    this.subscriptions.add(
      this.AuthService.userLogin(formData).pipe(
        tap(this.loginState.store().user.set.bind(this))
      ).subscribe()
    );
  }
}
