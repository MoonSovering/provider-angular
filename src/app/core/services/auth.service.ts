import { Injectable, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HttpService } from './generals/http.service';
import { LoginApiToUserMapper } from '../mappers/login-api-to-user.mapper';
import { IUserLogin } from '../models/user-login.model';
import { URL_RESOURCES } from '../resources/url.resources';
import { StorageService } from './generals/storage.service';
import { IUserRegister } from '../models/user-register.model';
import { RegisterApiToUserMapper } from '../mappers/register-api-to-user.mapper';
import { VerifyTokenMapper } from '../mappers/verify-token.mapper';
import { IVerifyToken } from '../models/interfaces/verify-token.interface';
import { AuthStatus } from '../models/interfaces/auth-status';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpService: HttpService,
    private readonly loginMapper: LoginApiToUserMapper,
    private readonly registerMapper: RegisterApiToUserMapper,
    private readonly verifyTokenMapper: VerifyTokenMapper,
    private readonly storage: StorageService
  ) { }

  userLogin(loginData): Observable<IUserLogin>{
    const url = URL_RESOURCES.login;
    const user = this.httpService.post<IUserLogin>(url, loginData)
    .pipe(
      map((result) => this.loginMapper.map(result) ),
      tap( (result) => this.storage.set('token', result.token) )
    );
    return user;
  }

  userRegister(registerData): Observable<IUserRegister>{
    const url = URL_RESOURCES.register;
    const newUser = this.httpService.post<IUserRegister>(url, registerData)
    .pipe(
      map( (result) =>  this.registerMapper.map(result)),
      tap( (result) => this.storage.set('token', result.token) )
    );
    return newUser;
  }

  verifyToken(): Observable<IVerifyToken>{
    const url = URL_RESOURCES.verifyToken;
    return this.httpService.get<IVerifyToken>(url).pipe(
      map( (result) => this.verifyTokenMapper.map(result)),
      tap( (result) => result.response)
    );
  }
}
