import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { ExpenseFixedComponent } from './expense-fixed/expense-fixed.component';
import { ExpenseControlComponent } from './expense-control/expense-control.component';


const routes: Routes = [
  {
    path: 'fixed',
    component: ExpenseFixedComponent
  }, {
    path: 'control',
    component: ExpenseControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
