import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense';
import * as QueryString from 'qs';
import { ExpenseFilters } from '../models/expenseFilter';
import { ExpenseDetails } from '../models/expenseDetails';

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

    let params;

    if (filters != null) {
      params = {
        'categoryId': filters.categoryId,
        'userId': filters.userId,
        'active': filters.active,
      };
    }

    return firstValueFrom(this.http.get<Expense[]>(this.baseURL + "/filter", {
      params: params
    }));
  }
  save(data: Expense, id?: number): Promise<any> {

    if (id) {
      data.id = id;
      return firstValueFrom(this.http.put(this.baseURL.concat('/'), data));
    }
    return firstValueFrom(this.http.post(this.baseURL.concat('/'), data));

  }
  delete(id: number) {
    firstValueFrom(this.http.delete(this.baseURL.concat('/' + id)));
  }
}
