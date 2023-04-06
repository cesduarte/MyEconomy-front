import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ExpenseDetails } from 'src/app/models/expenseDetails';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { ExpenseFiltersComponent } from '../../expense-filters/expense-filters.component';
import { ExpenseDetailService } from 'src/app/services/expense-detail.service';
import { ExpenseDetailComponent } from '../../expense-detail/expense-detail.component';

@Component({
  selector: 'app-expense-control-list',
  templateUrl: './expense-control-list.component.html',
  styleUrls: ['./expense-control-list.component.scss']
})
export class ExpenseControlListComponent {

  @Input() type: any;

  expenseList: ExpenseDetails[] = []

  filter!: ExpenseFilters

  bsModalRef?: BsModalRef

  constructor(
    private readonly modalService: BsModalService,
    private readonly expenseDtService: ExpenseDetailService
  ) { }

  async ngOnInit(): Promise<void> {
    this.getDefaultFilter();
    await this.loadExpenses();

    this.expenseDtService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
  }
  async loadExpenses(): Promise<void> {
    try {
      this.expenseList = await this.expenseDtService.getByFilters(this.filter);
    } catch (error) {
      console.log(error)
    }
    finally {

    }
  }

  getDefaultFilter() {

    this.filter = {} as ExpenseFilters;

    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this.filter.startDate = moment(firstDay).format('YYYY-MM-DD');
    this.filter.lastDate = moment(lastDay).format('YYYY-MM-DD');

    this.filter.typeId = this.type;
    this.filter.statusId = 0

    this.filter.categoryId = 0;
    this.filter.userId = 0;

    this.filter.active = true;
  }
  showModalSearch() {
    const initialState: ModalOptions = {
      initialState: {
        showFilterType: false,
        showFilterStatus: this.type == 1,
        filter: this.filter
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseFiltersComponent,
      initialState
    );
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      this.filter = { ...result.value }
      this.loadExpenses()
    })
  }
  async cleanFilter() {
    this.getDefaultFilter();
    await this.loadExpenses();
  }
  openDialog() {
    const initialState: ModalOptions = {
      initialState: {
        isInclusao: true,
        typeId: 2
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseDetailComponent,
      initialState
    );
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      this.loadExpenses();
    })
  }
}
