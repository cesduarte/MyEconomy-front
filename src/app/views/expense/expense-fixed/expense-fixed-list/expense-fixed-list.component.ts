import { Component, Input, Output } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-expense-fixed-list',
  templateUrl: './expense-fixed-list.component.html',
  styleUrls: ['./expense-fixed-list.component.scss']
})
export class ExpenseFixedListComponent {

  @Input() expenseList: Expense[] = []


}
