import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CovidService {
  constructor(private http: HttpClient) {}
  getCovidData(): Observable<any> {
    return this.http.get<any>('https://coronavirus.m.pipedream.net/');
  }
}
