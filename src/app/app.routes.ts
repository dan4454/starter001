import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: 'route1', loadComponent: () => import('./route1/route1.component').then(m=> m.Route1Component)},
  

];
