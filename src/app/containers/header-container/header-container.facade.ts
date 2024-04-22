import { Router } from "@angular/router";
import { StorageService } from "../../core/services/generals/storage.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'

})
export class HeaderContainerFacade {
  constructor(
    private readonly store: StorageService,
    private readonly router: Router
  ) {}

  public handleLinkedButtonValue($event: string): void {
    if($event !== 'home') {
      this.store.remove('token');
      this.router.navigate(['/auth/sign-in']);
    }
  }
}
