import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { TableDiagramComponent } from './table-diagram/table-diagram.component';

@NgModule({
  declarations: [TableDiagramComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
