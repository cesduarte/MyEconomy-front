import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public update: EventEmitter<any> = new EventEmitter();

  baseURL = environment.apiURL + '/api/users';

  constructor(private readonly http: HttpClient) { }

  get(): Promise<User[]> {
		return firstValueFrom(this.http.get<User[]>(this.baseURL));
	}

  save(data: User,id?: number): Promise<any> {

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
