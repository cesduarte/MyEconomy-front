import { Expense } from "./expense";

export interface ExpenseDetails{
  id:number;
  dueDay: Date;
  expenseValue: number;
  status: number;
  expense: Expense
}
