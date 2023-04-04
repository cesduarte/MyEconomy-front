import { Category } from "./category";
import { User } from "./user";

export interface ExpenseFilters{
  startDate: string,
  lastDate:string,
  userId: number;
  categoryId: number,
  statusId: number,
  typeId: number,
  active: boolean,
}
