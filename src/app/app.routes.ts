import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'provider',
    loadChildren: () => import('./private/private.module')
      .then((module) => module.PrivateModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./public/public.module')
      .then( (module) => module.PublicModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
