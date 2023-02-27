import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseDetails } from 'src/app/models/expenseDetails';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.scss']
})
export class ManagementListComponent implements OnInit {

  expenses:  Expense[] = []
  details: ExpenseDetails[] = [];



  constructor(private readonly expenseService: ExpenseService) {

  }

  async ngOnInit(): Promise<void> {
    await this.loadExpenses();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
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
  getexpenseValue(): number{
    var total = this.details.reduce((accumulator, object) => {
      return accumulator + object.expenseValue;
    }, 0);
    return total;
  }
}
