import { Injectable } from "@angular/core";
import { IUser } from "../models/user.model";
import { ILoginUser } from "../models/interfaces/login-user.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiToUserMapper {
  map(payload: any): ILoginUser {
    return {
      username: payload.username,
      password: payload.password
    }
  }
}
