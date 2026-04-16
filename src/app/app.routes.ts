import { Routes } from '@angular/router';
import { CatalegPage } from './pages/cataleg/cataleg.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'elements',
    pathMatch: 'full'
  },
  {
    path: 'elements',
    component: CatalegPage
  }
];