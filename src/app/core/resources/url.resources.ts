import { environment } from "../../../environments/environtment.development";


export const URL_RESOURCES = {
  login: `${environment.apiUrl}/auth/sign-in`,
  register: `${environment.apiUrl}/auth/sign-up`,
  verifyToken: `${environment.apiUrl}/verify/token`,
  buyNovel: `${environment.apiUrl}/provide/novel`,
  buyBook: `${environment.apiUrl}/provide/book`,
  managerList: `${environment.apiUrl}/provide/list/manager`,
  budgetManager: `${environment.apiUrl}/provide/list/budget`,
  pexelApi: `${environment.pexelUrl}`
}
