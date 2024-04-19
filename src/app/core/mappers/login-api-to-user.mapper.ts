import { Injectable } from "@angular/core";
import { IUserLogin } from "../models/user-login.model";


@Injectable({
  providedIn: 'root'
})
export class LoginApiToUserMapper {
  map(payload: any): IUserLogin {
    return {
      username: payload.username,
      token: payload.token
    }
  }
}
