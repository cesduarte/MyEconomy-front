import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ExpenseRoutingModule } from './expense-routing.module';

import { ExpenseFixedComponent } from './expense-fixed/expense-fixed.component';
import { ExpenseFixedListComponent } from './expense-fixed/expense-fixed-list/expense-fixed-list.component';
import { ExpenseFiltersComponent } from './expense-filters/expense-filters.component';
import { ExpenseStatusActiveComponent } from './expense-aux/expense-status-active/expense-status-active.component';
import { ExpenseControlComponent } from './expense-control/expense-control.component';
import { ExpenseControlListComponent } from './expense-control/expense-control-list/expense-control-list.component';




@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseDetailComponent,
    ExpenseFixedComponent,
    ExpenseFixedListComponent,
    ExpenseFiltersComponent,
    ExpenseStatusActiveComponent,
    ExpenseControlComponent,
    ExpenseControlListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExpenseRoutingModule
  ],
  exports:[
  ],
})
export class ExpenseModule { }
