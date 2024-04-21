import { Injectable } from "@angular/core";
import { BudgetManagerState } from "./budget-manager.state";
import { ProductState } from "./buy-product.state";
import { LoginState } from "./login.state";
import { ManagerListState } from "./manager-list.state";
import { RegisterState } from "./register.state";
import { RenderProductState } from "./render-product.state";
import { saveProductsState } from "./all-product.state";
import { RenderManyProductState } from "./render-many-product.state";


@Injectable({
  providedIn: 'root'
})
export class AppState {

  constructor(
    private readonly budgetManagerState: BudgetManagerState,
    private readonly productState: ProductState,
    private readonly loginState: LoginState,
    private readonly managerListState: ManagerListState,
    private readonly registerState: RegisterState,
    private readonly renderProductState: RenderProductState,
    private readonly saveProductsState: saveProductsState,
    private readonly renderManyProductState: RenderManyProductState
  ) { }

  get login() {
    return this.loginState.loginStore();
  }

  get register(){
    return this.registerState.registerStore();
  }

  get budget(){
    return this.budgetManagerState.budgetStore();
  }

  get product(){
    return this.productState.productStore();
  }

  get renderProduct(){
    return this.renderProductState.productRenderStore();
  }

  get managerList(){
    return this.managerListState.managerListStore();
  }
  get saveProducts() {
    return this.saveProductsState.saveProducts();
  }

  get renderManyProduct(){
    return this.renderManyProductState.productRenderStore();
  }
}
