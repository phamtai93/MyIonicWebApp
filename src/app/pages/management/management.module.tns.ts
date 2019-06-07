import { TableDiagramModule } from './table-diagram/table-diagram.module.tns';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ManagementRoutingModule } from './management-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TableDiagramComponent } from './table-diagram/table-diagram.component';

@NgModule({
  declarations: [TableDiagramComponent
  ],
  imports: [
    ManagementRoutingModule,
    NativeScriptCommonModule,
    TableDiagramModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ManagementModule { }
