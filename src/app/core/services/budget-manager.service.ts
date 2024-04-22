import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { URL_RESOURCES } from '../resources/url.resources';
import { Observable, map, tap } from 'rxjs';
import { IBudgetManager } from '../models/budget-manager.model';
import { IBudgetResponse } from '../models/budget-manager-response.model';
import { ResponseBudgetMapper } from '../mappers/budget-response.mapper';
import { BudgetMapperHtpp } from '../mappers/budget-manager-api-to.mapper';

@Injectable({
  providedIn: 'root'
})
export class BudgetManagerService {

  constructor(
    private readonly httpService: HttpService,
    private readonly budgetMapper: ResponseBudgetMapper,
    private readonly budgetRequestMapper: BudgetMapperHtpp
  ) { }

  postBudgetManager(budgetData): Observable<IBudgetResponse[]> {
    console.log('budgetData', budgetData)
    let budgetRequestData = this.budgetRequestMapper.map(budgetData);
    console.log('budgetRequestData', budgetRequestData)
    const url = URL_RESOURCES.budgetManager;
    const budget = this.httpService.post<IBudgetManager>(url, budgetRequestData)
    .pipe(
      map((result) => this.budgetMapper.map(result)),
      tap( (result) => result)
    );
    return budget;
  }
}
