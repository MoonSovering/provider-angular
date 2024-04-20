import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";
import { IManagerList } from "../models/manager-list.model";

@Injectable({
  providedIn: 'root'
})
export class ManagerListState {
  private managerList$: BehaviorSubject<IManagerList> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  managerListStore() {
    return {
      managerList: this.factory.state(this.managerList$),
    }
  }
}
