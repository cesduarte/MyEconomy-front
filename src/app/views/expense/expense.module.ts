import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ExpenseRoutingModule } from './expense-routing.module';
import { DatetimeFormatPipe } from 'src/app/pipes/datetime-format.pipe';
import { ExpenseDetailTableComponent } from './expense-detail-table/expense-detail-table.component';
import { ExpenseFixedComponent } from './expense-fixed/expense-fixed.component';
import { ExpenseFixedListComponent } from './expense-fixed/expense-fixed-list/expense-fixed-list.component';
import { ExpenseFiltersComponent } from './expense-filters/expense-filters.component';



@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ExpenseDetailTableComponent,
    ExpenseFixedComponent,
    ExpenseFixedListComponent,
    ExpenseFiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExpenseRoutingModule
  ],
  exports:[
    ExpenseListComponent,
  ],
})
export class ExpenseModule { }
