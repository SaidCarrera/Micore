import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getSalesByDateRange(startDate: Date, endDate: Date): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/sales/range`, {
      params: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      }
    });
  }

  getTopSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sales/top-sellers`);
  }
}