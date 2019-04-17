import { ManagementComponent } from './management/management.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [{
      path: 'management',
      component: ManagementComponent,
    },
    {
      path: '',
      redirectTo: 'management',
      pathMatch: 'full',
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
