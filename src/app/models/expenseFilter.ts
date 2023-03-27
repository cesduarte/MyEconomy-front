import { Category } from "./category";
import { User } from "./user";

export interface ExpenseFilters{
  startDate: Date,
  FinalDate:Date
  user: User;
  category: Category
}
