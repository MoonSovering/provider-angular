import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { AuthService } from "../../core/services/auth.service";
import { IUserRegister } from "../../core/models/user-register.model";
import { RegisterState } from "../../core/state/register.state";
import { IRegisterUser } from "../../core/models/interfaces/register-user.interface";


@Injectable({
  providedIn: 'root'
})
export class RegisterContainerFacade {

  private subscriptions: Subscription;

  constructor(
    private readonly registerState: RegisterState,
    private readonly AuthService: AuthService
  ){}

  user$(): Observable<IRegisterUser> {
    return this.registerState.registerStore().user.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
  getUser(formData: IUserRegister): void {
    this.subscriptions.add(
      this.AuthService.userRegister(formData).pipe(
        tap(this.registerState.registerStore().user.set.bind(this))
      ).subscribe()
    );
  }
}
