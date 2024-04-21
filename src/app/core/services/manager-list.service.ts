import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ManagerListMapper } from '../mappers/manager-list-api-to.mapper';
import { URL_RESOURCES } from '../resources/url.resources';
import { Observable, map, tap } from 'rxjs';
import { IBuyProduct } from '../models/buy-product.model';
import { IManagerList } from '../models/manager-list.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerListService {

  constructor(
    private readonly httpService: HttpService,
    private readonly managerListMapper: ManagerListMapper
  ) { }

  postManagerList(managerListData): Observable<IManagerList> {
    const url = URL_RESOURCES.managerList;
    const managerList = this.httpService.post<IManagerList>(url, managerListData)
    .pipe(
      map((result) => this.managerListMapper.map(result)),
      tap( (result) => result)
    );
    return managerList;
  }
}
