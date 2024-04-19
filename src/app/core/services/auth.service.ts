import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environtment.development';
import { HttpService } from './generals/http.service';
import { LoginApiToUserMapper } from '../mappers/login-api-to-user.mapper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.apiUrl;

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: LoginApiToUserMapper
  ) { }


  userLogin(){
    
  }

}
