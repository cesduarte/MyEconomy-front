import { Component, Input } from '@angular/core';
import { ExpenseDetails } from 'src/app/models/expenseDetails';

@Component({
  selector: 'app-expense-detail-table',
  templateUrl: './expense-detail-table.component.html',
  styleUrls: ['./expense-detail-table.component.scss']
})
export class ExpenseDetailTableComponent {

  @Input() details: ExpenseDetails[] = [];
}
