import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IManagerList } from "../models/manager-list.model";
import { IListResponseManager } from "../models/list-manager-response.model";

@Injectable({
  providedIn: 'root'
})
export class ManagerListState {
  private managerList$: BehaviorSubject<IListResponseManager> = new BehaviorSubject<IListResponseManager>(null);

  constructor(private readonly factory: StateFactory) { }

  managerListStore() {
    return {
      managerList: this.factory.state(this.managerList$),
    }
  }
}
