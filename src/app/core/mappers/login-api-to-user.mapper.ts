import { Injectable } from "@angular/core";
import { IUser } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginApiToUserMapper {
  map(payload: any): IUser {
    return {
      username: payload.username,
      token: payload.token
    }
  }
}
