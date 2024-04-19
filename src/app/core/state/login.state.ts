import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { ILoginUser } from "../models/interfaces/login-user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginState {
  private user$: BehaviorSubject<ILoginUser> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      user: this.factory.state(this.user$),
    }
  }
}
