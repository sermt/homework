import { Injectable } from '@angular/core';
import { APIResponse } from '../models/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRandomData(): Observable<APIResponse> {
    const APIurl = 'https://api.chucknorris.io/jokes/random';
    return this.http.get<APIResponse>(APIurl);
  }
}
