import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HttpService } from './generals/http.service';
import { LoginApiToUserMapper } from '../mappers/login-api-to-user.mapper';
import { IUserLogin } from '../models/user-login.model';
import { URL_RESOURCES } from '../resources/url.resources';
import { StorageService } from './generals/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: LoginApiToUserMapper,
    private readonly storage: StorageService
  ) { }

  userLogin(formData): Observable<IUserLogin>{
    const url = URL_RESOURCES.login;
    const user = this.httpService.post<IUserLogin>(url, formData)
    .pipe(
      map((result) => this.mapper.map(result) ),
      tap( (result) => this.storage.set('token', result.token) )
    );
    return user;
  }
}
