import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;
  base_url = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  get_all_bars(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.base_url}/bar/get_all`
    );
  }

  get_all_beverages(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.base_url}/beverage/get_all`
    );
  }

  get_all_stocks(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.base_url}/stock/get_all`
    );
  }
  
  get_all_visits(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.base_url}/visit/get_all?start=2023-01-01&end=2025-01-01&limit=100&offset=0`
    );
  }


  add_bar(bar: any): Observable<any> {
    return this.http.post(
      `${this.base_url}/bar/create`,
      JSON.stringify(bar),
      this.httpOptions
    );
  }

  
  add_beverage(model: any): Observable<any> {
    return this.http.post(
      `${this.base_url}/beverage/create`,
      JSON.stringify(model),
      this.httpOptions
    );
  }

  add_stock(model: any): Observable<any> {
    return this.http.post(
      `${this.base_url}/stock/create`,
      JSON.stringify(model),
      this.httpOptions
    );
  }

  add_visit(model: any): Observable<any> {
    return this.http.post(
      `${this.base_url}/visit/create`,
      JSON.stringify(model),
      this.httpOptions
    );
  }
  

}
