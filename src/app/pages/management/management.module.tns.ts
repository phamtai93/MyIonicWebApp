import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ManagementRoutingModule } from './management-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TableDiagramComponent } from './table-diagram/table-diagram.component';

@NgModule({
  declarations: [TableDiagramComponent],
  imports: [
    ManagementRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ManagementModule { }
