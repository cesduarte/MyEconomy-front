import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  baseURL = environment.apiURL + '/classification';

  constructor(private readonly http: HttpClient) { }

  get(): Promise<any> {
		return firstValueFrom(this.http.get(this.baseURL.concat('/All')));
	}

}
