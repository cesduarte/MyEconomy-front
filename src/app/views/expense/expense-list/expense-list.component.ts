import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  expense!: Expense;

  display: boolean = false;

  constructor(
    private readonly expenseService: ExpenseService
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
    finally{

    }
	}
  openDialog(obj: any){
    this.display = true;
    this.expense = obj;
  }
  onDialogClose(event: any) {
    this.display = event;
  }

}
