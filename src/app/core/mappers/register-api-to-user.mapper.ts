import { Injectable } from "@angular/core";
import { IUserRegister } from "../models/user-register.model";


@Injectable({
  providedIn: 'root'
})
export class RegisterApiToUserMapper {
  map(payload: any): IUserRegister {
    return {
      username: payload.username,
      token: payload.token
    }
  }
}
