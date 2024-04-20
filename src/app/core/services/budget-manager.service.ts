import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { BudgetMapper } from '../mappers/budget-manager-api-to.mapper';
import { URL_RESOURCES } from '../resources/url.resources';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetManagerService {

  constructor(
    private readonly httpService: HttpService,
    private readonly budgetMapper: BudgetMapper
  ) { }

  postBudgetManager(budgetData) {
    const url = URL_RESOURCES.budgetManager;
    const budget = this.httpService.post(url, budgetData)
    .pipe(
      map((result) => this.budgetMapper.map(result)),
      tap( (result) => result)
    );
    return budget;
  }
}
