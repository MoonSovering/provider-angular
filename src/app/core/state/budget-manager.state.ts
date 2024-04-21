import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IBudgetManager } from "../models/budget-manager.model";



@Injectable({
  providedIn: 'root'
})
export class BudgetManagerState {
  private budgetManager$: BehaviorSubject<IBudgetManager> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  budgetStore() {
    return {
      budgetManager: this.factory.state(this.budgetManager$),
    }
  }
}
