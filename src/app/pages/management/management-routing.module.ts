import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDiagramComponent } from './table-diagram/table-diagram.component';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [{
      path: 'table-diagram',
      component: TableDiagramComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
