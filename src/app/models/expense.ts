import { Category } from "./category";
import { ExpenseDetails } from "./expenseDetails";
import { User } from "./user";
export interface Expense{
  id: number;
  description:string;
  expenseType: number;
  dueDate: Date
  installments: number
  expenseValue: number
  user: User;
  category: Category
}
