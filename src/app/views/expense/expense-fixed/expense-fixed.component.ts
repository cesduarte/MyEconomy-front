import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Expense } from 'src/app/models/expense';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseFiltersComponent } from '../expense-filters/expense-filters.component';
import * as moment from 'moment';

@Component({
  selector: 'app-expense-fixed',
  templateUrl: './expense-fixed.component.html',
  styleUrls: ['./expense-fixed.component.scss']
})
export class ExpenseFixedComponent implements OnInit {

  expenseList: Expense[] = []

  bsModalRef?: BsModalRef

  filter!: ExpenseFilters

  constructor(
    private readonly expenseService: ExpenseService,
    private readonly modalService: BsModalService
  ) { }

  async ngOnInit(): Promise<void> {

    // this.getDefaultFilter();

    await this.loadList();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadList();
    });
  }

  async loadList() {

    try {

      this.expenseList = await this.expenseService.get();

    } catch (error) {

      console.log(error);

    }
    finally {

    }

  }
  showModalSearch() {
    const initialState: ModalOptions = {
      initialState: {
        filter: this.filter,
        showFilterDate: false,
        showFilterStatus: false
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseFiltersComponent,
      initialState
    );
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      this.filter = { ...result.value }
      this.loadList()
    })
  }
}
