import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Expense } from 'src/app/models/expense';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseFiltersComponent } from '../expense-filters/expense-filters.component';
import * as moment from 'moment';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';

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

    this.getDefaultFilter();

    await this.loadList();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadList();
    });
  }

  async loadList() {

    try {

      this.expenseList = await this.expenseService.getByFilters(this.filter);

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
        showFilterStatus: false,
        showFilterType: false,
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
  getDefaultFilter() {
    this.filter = {} as ExpenseFilters;

    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this.filter.startDate = moment(firstDay).format('YYYY-MM-DD');
    this.filter.lastDate = moment(lastDay).format('YYYY-MM-DD');

    this.filter.typeId = 0;
    this.filter.statusId = 0

    this.filter.categoryId = 0;
    this.filter.userId = 0;

    this.filter.active = true;

  }
  async cleanFilter() {
    this.getDefaultFilter();
    await this.loadList();
  }
  openDialog() {
    const initialState: ModalOptions = {
      initialState: {
        isInclusao: true
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseDetailComponent,
      initialState
    );
  }
}
