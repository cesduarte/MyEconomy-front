import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public update: EventEmitter<any> = new EventEmitter();

  baseURL = environment.apiURL + '/api/category';

  constructor(private readonly http: HttpClient) { }

  get(): Promise<Category[]> {
		return firstValueFrom(this.http.get<Category[]>(this.baseURL));
	}

  save(data: Category,id?: number): Promise<any> {

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
