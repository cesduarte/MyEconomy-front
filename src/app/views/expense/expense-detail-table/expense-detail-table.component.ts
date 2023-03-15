import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ExpenseDetails } from 'src/app/models/expenseDetails';

@Component({
  selector: 'app-expense-detail-table',
  templateUrl: './expense-detail-table.component.html',
  styleUrls: ['./expense-detail-table.component.scss']
})
export class ExpenseDetailTableComponent {

  @Input() details: ExpenseDetails[] = [];

  /**
   *
   */
  constructor(public bsModalRef: BsModalRef) {


  }

  getexpenseValue(): number{
    var total = this.details.reduce((accumulator, object) => {
      return accumulator + object.expenseValue;
    }, 0);
    return total;
  }
}
