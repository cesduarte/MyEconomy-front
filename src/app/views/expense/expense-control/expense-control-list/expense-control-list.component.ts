import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ExpenseDetails } from 'src/app/models/expenseDetails';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { ExpenseFiltersComponent } from '../../expense-filters/expense-filters.component';
import { ExpenseDetailService } from 'src/app/services/expense-detail.service';
import { ExpenseDetailComponent } from '../../expense-detail/expense-detail.component';
import Swal from 'sweetalert2';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';

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

  titleCollunButton: string = "";

  constructor(
    private readonly modalService: BsModalService,
    private readonly expenseDtService: ExpenseDetailService,
    private readonly expenseService: ExpenseService,

  ) { }

  async ngOnInit(): Promise<void> {
    this.titleCollunButton = this.type == 1?  "Pago?": "";
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
        showFilterActive: false,
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
        typeId: 2,
        title: "Lançar despesa variável"
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
  deleteExpense(expenseDt: ExpenseDetails) {
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza que deseja deletar?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: `Cancelar`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await this.expenseService.delete(expenseDt.expense.id)
          await Swal.fire('Despesa deletada com sucesso!', '', 'success')
        }
        catch (error) {
          console.error('enviaForm', error);
        }
        finally {
          this.loadExpenses()
        }
      }
    })
  }
  updateExpense(expenseDt: ExpenseDetails) {
    let msg = expenseDt.status == 2 ? "reabrir" : "pagar";
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza que deseja '+ msg +' a despesa? ' + expenseDt.expense.description,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: `Cancelar`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await this.expenseDtService.Pay(expenseDt.id, expenseDt.status)
          await Swal.fire('Despesa alterada com sucesso!', '', 'success')
        }
        catch (error) {
          console.error('enviaForm', error);
        }
        finally {
          this.loadExpenses()
        }
      }
    })
  }
  getIconExpenseFixed(status: number): string {
    return status == 1 ? "pi pi-pencil" : "pi pi-trash"
  }
}
