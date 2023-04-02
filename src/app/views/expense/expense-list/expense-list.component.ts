import { Component, OnInit, ViewChild } from '@angular/core';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';


import { DialogService } from 'primeng/dynamicdialog';

import { Expense } from 'src/app/models/expense';

import { ExpenseService } from 'src/app/services/expense.service';

import Swal from 'sweetalert2';
import { ExpenseDetailTableComponent } from '../expense-detail-table/expense-detail-table.component';

import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
  providers: [DialogService]
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = []

  bsModalRef?: BsModalRef

  constructor(
    private readonly expenseService: ExpenseService,
    private readonly modalService: BsModalService,
  ) { }

  items!: any[];



  async ngOnInit(): Promise<void> {

    await this.loadExpenses();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
    ];
  }


  async loadExpenses(): Promise<void> {
    try {
      this.expenses = await this.expenseService.get();
      console.log(this.expenses)
    } catch (error) {

      console.log(error)
    }
    finally {

    }
  }
  openDialog(obj: any) {
    const initialState: ModalOptions = {
      initialState: {
        expense: obj,
        isInclusao: !obj
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseDetailComponent,
      initialState
    );

  }
  delete(expense: Expense) {
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza que deseja deletar?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Cancelar`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await this.expenseService.delete(expense.id)
          await Swal.fire('Despesa deletada com sucesso!', '', 'success')
        }
        catch (error) {
          console.error('enviaForm', error);
        }
        finally {
          this.expenseService.updateExpense.emit(expense ? expense : true);
        }
      }
    })
  }

  detail(expense: Expense){
    const initialState: ModalOptions = {
      initialState: {
        details: expense.expenseDetailsViewModels
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseDetailTableComponent,
      initialState
    );
  }


}
