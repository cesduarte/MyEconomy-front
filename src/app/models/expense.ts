import { ExpenseDetails } from "./expenseDetails";
import { User } from "./user";
export interface Expense{
  id: number;
  description:string;
  dueDate: Date
  installments: number
  expenseValue: number
  user: User;
  expenseDetailsViewModels: ExpenseDetails[];
}
