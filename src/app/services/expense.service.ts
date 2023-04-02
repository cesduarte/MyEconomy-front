import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense';
import * as QueryString from 'qs';
import { ExpenseFilters } from '../models/expenseFilter';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  public updateExpense: EventEmitter<any> = new EventEmitter();

  baseURL = environment.apiURL + '/api/expense';

  constructor(private readonly http: HttpClient) { }

  get(): Promise<Expense[]> {
		return firstValueFrom(this.http.get<Expense[]>(this.baseURL));
	}
  getByFilters(filters: ExpenseFilters): Promise<Expense[]> {

    return firstValueFrom(this.http.get<Expense[]>(this.baseURL + "/filter",{
      params:{
        'startDate':filters.startDate,
        'finalDate':filters.lastDate,
        'status': filters.statusId
      }
    }));
	}
  save(data: Expense,id?: number): Promise<any> {

    if (id){
      data.id = id;
      return firstValueFrom(this.http.put(this.baseURL.concat('/'), data));
    }
    return firstValueFrom(this.http.post(this.baseURL.concat('/'), data));

	}
  delete(id: number){
    firstValueFrom(this.http.delete(this.baseURL.concat('/'+id)));
  }
}
