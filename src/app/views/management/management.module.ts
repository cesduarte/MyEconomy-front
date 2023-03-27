import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ManagementComponent } from './management.component';
import { ManagementListComponent } from './management-list/management-list.component';
import { ManagementFiltersComponent } from './management-filters/management-filters.component';



@NgModule({
  declarations: [
    ManagementComponent,
    ManagementListComponent,
    ManagementFiltersComponent

  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
  ]
})
export class ManagementModule { }
