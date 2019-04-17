import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
      path: 'pages',
      loadChildren: 'src/app/pages/pages.module#PagesModule'
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];
