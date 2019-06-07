import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { TableDiagramComponent } from './table-diagram/table-diagram.component';
import { TableDiagramModule } from './table-diagram/table-diagram.module';

@NgModule({
  declarations: [TableDiagramComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    TableDiagramModule
  ]
})
export class ManagementModule { }
