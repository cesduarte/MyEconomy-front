import { Component, OnInit, TemplateRef } from '@angular/core';
import * as moment from 'moment';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Expense } from 'src/app/models/expense';
import { ExpenseDetails } from 'src/app/models/expenseDetails';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { ExpenseDetailService } from 'src/app/services/expense-detail.service';
import { ExpenseService } from 'src/app/services/expense.service';
import Swal from 'sweetalert2';
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
  filter = {} as ExpenseFilters

  constructor(
    private readonly expenseService: ExpenseService,
    private readonly modalService: BsModalService,
    private readonly expenseDtService: ExpenseDetailService
  ) {

  }

  async ngOnInit(): Promise<void> {

    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this.filter.startDate = moment(firstDay).format('YYYY-MM-DD');
    this.filter.lastDate = moment(lastDay).format('YYYY-MM-DD');

    await this.loadExpenses(this.filter);

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
  }
  async loadExpenses(filter?: any): Promise<void> {
    try {
      this.expenses = await this.expenseService.getByFilters(filter);
      if (this.filter?.userId > 0) {
        this.expenses = this.expenses.filter(e => e.user.id == this.filter.userId)
      }
      if (this.filter?.categoryId > 0) {
        this.expenses = this.expenses.filter(e => e.category.id == this.filter.categoryId)
      }
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
        filter: this.filter
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ManagementFiltersComponent,
      initialState
    );
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      this.filter = { ...result.value }
      this.loadExpenses(this.filter)
    })
  }

  putExpenseDetail(detail: ExpenseDetails) {
    if (detail.status == 1) {
      this.payExpense(detail)
    }
    else if (detail.status == 2) {
      this.openExpense(detail)
    }
  }
  payExpense(detail: ExpenseDetails) {

    Swal.fire({
      title: 'Tem certeza que deseja pagar está despesa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pagar',
      cancelButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await this.expenseDtService.Pay(detail.id, detail.status)
          await Swal.fire('Despesa paga com sucesso!', '', 'success')
        } catch (error) {

        }
        finally {
          this.loadExpenses(this.filter);
        }
      }
    })
  }
  openExpense(detail: ExpenseDetails) {
    Swal.fire({
      title: 'Tem certeza que deseja reabrir está despesa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, reabrir',
      cancelButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await this.expenseDtService.Pay(detail.id, detail.status)
          await Swal.fire('Despesa aberta com sucesso!', '', 'success')
        } catch (error) {

        }
        finally {
          this.loadExpenses(this.filter);
        }
      }
    })
  }

}
