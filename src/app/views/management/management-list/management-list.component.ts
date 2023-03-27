import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Expense } from 'src/app/models/expense';
import { ExpenseDetails } from 'src/app/models/expenseDetails';
import { ExpenseService } from 'src/app/services/expense.service';
import { ManagementFiltersComponent } from '../management-filters/management-filters.component';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.scss']
})
export class ManagementListComponent implements OnInit {

  expenses: Expense[] = []
  details: ExpenseDetails[] = [];
  bsModalRef?: BsModalRef



  constructor(
    private readonly expenseService: ExpenseService,
    private readonly modalService: BsModalService
    ) {

  }

  async ngOnInit(): Promise<void> {
    await this.loadExpenses();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
  }

  async loadExpenses(): Promise<void> {
    try {
      this.expenses = await this.expenseService.getByRange();

      console.log(this.expenses)
    } catch (error) {

      console.log(error)
    }
    finally {

    }
  }
  getexpenseValue(): number {
    var total = this.details.reduce((accumulator, object) => {
      return accumulator + object.expenseValue;
    }, 0);
    return total;
  }
  getTextStatus(status: number): string {
    if (status == 1) {
      return "A pagar"
    }
    else if (status == 2) {
      return "Pago"
    }
    return "";
  }
  openDialog() {
    const initialState: ModalOptions = {
      initialState: {
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ManagementFiltersComponent,
      initialState
    );

  }
}
