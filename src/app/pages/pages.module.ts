import { ThemeModule } from './../@theme/theme.module';
import { ManagementComponent } from './management/management.component';
import { ManagementModule } from './management/management.module.tns';
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
