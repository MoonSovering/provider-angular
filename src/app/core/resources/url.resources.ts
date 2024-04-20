import { environment } from "../../../environments/environtment.development";


export const URL_RESOURCES = {
  login: `${environment.apiUrl}/auth/sign-in`,
  register: `${environment.apiUrl}/auth/sign-up`,
}
