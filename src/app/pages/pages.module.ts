import { TableDiagramModule } from './management/table-diagram/table-diagram.module';
import { ThemeModule } from './../@theme/theme.module';
import { ManagementComponent } from './management/management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
  ]
})
export class PagesModule { }
