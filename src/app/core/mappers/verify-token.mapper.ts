import { Injectable } from "@angular/core";
import { IVerifyToken } from "../models/interfaces/verify-token.interface";


@Injectable({
  providedIn: 'root'
})
export class VerifyTokenMapper {
  map(payload: any): IVerifyToken {
    return {
      response: payload.response
    }
  }
}
