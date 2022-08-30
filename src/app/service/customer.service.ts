import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl='https://localhost:7039/api/customers';
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl);
  }

  addCustomer(customer:Customer):Observable<Customer>{
    customer.id='00000000-0000-0000-0000-000000000000'; 
    return this.http.post<Customer>(this.baseUrl,customer)
  }
  deleteCustomer(id:string):Observable<Customer>{ 
    return this.http.delete<Customer>(this.baseUrl + '/' +id);
  }  
  updateCustomer(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.baseUrl +'/'+customer.id,customer);
  } 
}
