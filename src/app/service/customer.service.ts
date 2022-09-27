import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  id_: any
  private content = new BehaviorSubject<Customer>({
    id: 0,
    firstName: '',
    age: 0,
    email: '',
    phoneNumber: 0,
    gender: ''
  });
  public share = this.content.asObservable();
  baseUrl = 'https://localhost:7109/api/customers';
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    customer.id = 0;
    return this.http.post<Customer>(this.baseUrl, customer)
  }
  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl + '/' + id);
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseUrl + '/' + customer.id, customer);
  }
  getCustById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }
  saveCustomer(customer:Customer){
    this.content.next(customer);
  }
  deleteAll(){
    return this.http.delete(this.baseUrl,{responseType:'text'});
  }
}
