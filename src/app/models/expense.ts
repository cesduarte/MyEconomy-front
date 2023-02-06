import { ExpenseDetails } from "./expenseDetails";
export interface Expense{
  id: number;
  description:string;
  dueDate: Date
  installments: number
  expenseValue: number
  idUser: number;
  expenseDetailsViewModels: ExpenseDetails[];
}
