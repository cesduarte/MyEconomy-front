import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDetailService {

  baseURL = environment.apiURL + '/api/expensedetail';

  constructor(private readonly http: HttpClient) { }

  Pay(id?: number, status?: number): Promise<any> {
    console.log(id)
    return firstValueFrom(this.http.put(this.baseURL.concat('/'), {id: id, status: status} ));

	}
}
