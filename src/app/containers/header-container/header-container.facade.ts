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

  public handleLinkedButtonValue(data: string): void {
    if(data === 'logout') {
      this.store.remove('token');
      this.router.navigate(['/auth/sign-in']);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
}
