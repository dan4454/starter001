import { Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';

export const routes: Routes = [

    {path: 'route1', loadComponent: () => import('./route1/route1.component').then(m=> Route1Component)},
  

];
