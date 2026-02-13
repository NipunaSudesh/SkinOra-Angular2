import { Routes } from '@angular/router';
import {Index } from './pages/home/index';
import { PublicLayoutComponent } from './component/layout/public-layout/public-layout.component';

export const routes: Routes = [
        {
    path: '',
    component: PublicLayoutComponent, 
    children: [
      { path: '', component: Index }, 

    ],
  },
      // { path: '', component: HomeComponent }, 
];
