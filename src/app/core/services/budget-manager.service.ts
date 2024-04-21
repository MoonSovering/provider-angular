import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { BudgetMapper } from '../mappers/budget-manager-api-to.mapper';
import { URL_RESOURCES } from '../resources/url.resources';
import { Observable, map, tap } from 'rxjs';
import { IBudgetManager } from '../models/budget-manager.model';
import { IBudgetResponse } from '../models/budget-manager-response.model';
import { ResponseBudgetMapper } from '../mappers/budget-response.mapper';

@Injectable({
  providedIn: 'root'
})
export class BudgetManagerService {

  constructor(
    private readonly httpService: HttpService,
    private readonly budgetMapper: ResponseBudgetMapper
  ) { }

  postBudgetManager(budgetData): Observable<IBudgetResponse> {
    const url = URL_RESOURCES.budgetManager;
    const budget = this.httpService.post<IBudgetManager>(url, budgetData)
    .pipe(
      map((result) => this.budgetMapper.map(result)),
      tap( (result) => result)
    );
    return budget;
  }
}
