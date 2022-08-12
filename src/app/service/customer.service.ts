import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl='https://localhost:7083/api/Customers';
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl);
  }
}
