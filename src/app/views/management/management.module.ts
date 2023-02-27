import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ManagementComponent } from './management.component';
import { ManagementListComponent } from './management-list/management-list.component';



@NgModule({
  declarations: [
    ManagementComponent,
    ManagementListComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
  ]
})
export class ManagementModule { }
