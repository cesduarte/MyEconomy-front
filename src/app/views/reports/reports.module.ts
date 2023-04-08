import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReportListComponent } from './report-list/report-list.component';



@NgModule({
  declarations: [
    ReportsComponent,
    ReportListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ],
  exports:[
  ],
})
export class ReportsModule { }
