import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classification } from '../models/classification';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  public updateClassification: EventEmitter<any> = new EventEmitter();

  baseURL = environment.apiURL + '/classification';

  constructor(private readonly http: HttpClient) { }

  get(): Promise<Classification[]> {
		return firstValueFrom(this.http.get<Classification[]>(this.baseURL.concat('/All')));
	}
  save(data: Classification,id?: number): Promise<any> {

    if (id){
      data.id = id
      return firstValueFrom(this.http.put(this.baseURL.concat('/'), data));
    }
    return firstValueFrom(this.http.post(this.baseURL.concat('/'), data));

	}

}
