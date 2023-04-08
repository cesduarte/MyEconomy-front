import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpenseFilters } from '../models/expenseFilter';
import { ExpenseDetails } from '../models/expenseDetails';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDetailService {

  public updateExpense: EventEmitter<any> = new EventEmitter();

  baseURL = environment.apiURL + '/api/expenseDetail';

  constructor(private readonly http: HttpClient) { }

  Pay(id: number, status: number): Promise<any> {
    return firstValueFrom(this.http.put(this.baseURL.concat('/'), {id: id, status: status} ));

	}
  getByFilters(filters: ExpenseFilters): Promise<ExpenseDetails[]> {

    return firstValueFrom(this.http.get<ExpenseDetails[]>(this.baseURL + "/filter",{
      params:{
        'startDate':filters.startDate,
        'finalDate':filters.lastDate,
        'status': filters.statusId,
        'categoryId': filters.categoryId,
        'userId': filters.userId,
        'typeId': filters.typeId,
      }
    }));
	}
}
