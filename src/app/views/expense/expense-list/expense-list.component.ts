import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { DialogService } from 'primeng/dynamicdialog';

import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

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
    private modalService: BsModalService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadExpenses();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
  }


  async loadExpenses(): Promise<void> {
    try {
      this.expenses = await this.expenseService.get();
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
        title: 'Modal with component'
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseDetailComponent,
      // {
      //   class: 'mymodal-dialog-lg modal-dialog-centered',
      // },
      initialState
    );
    // if (obj) this.bsModalRef.componentInstance.expense = obj;
  }


}
