import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: 'route1', loadComponent: () => import('./route1/route1.component').then(m=> m.Route1Component)},
    {path: 'modalexample1', loadComponent: () => import('./modal-example1/modal-example1.component').then(m=> m.ModalExample1Component)},
    {path: 'callModal1', loadComponent: () => import('./call-modal1/call-modal1.component').then(m=> m.CallModal1Component)},
  
];
