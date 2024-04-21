import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IRegisterUser } from "../models/interfaces/register-user.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterState {
  private user$: BehaviorSubject<IRegisterUser> = new BehaviorSubject<IRegisterUser>(null);

  constructor(private readonly factory: StateFactory) { }

  registerStore() {
    return {
      user: this.factory.state(this.user$),
    }
  }
}
