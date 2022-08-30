import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../../service/customer.service'
@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {
  title = 'customers';
  customers: Customer[] = [];
  constructor(private service: CustomerService) { }
  customer: Customer = {
    id: '',
    firstName: '',
    age: 0,
    email: '',
    phoneNumber: 0,
    gender: ''
  }
  ngOnInit(): void {
    this.getAllCustomers();

  }
  getAllCustomers() {
    this.service.getAllCustomers().subscribe(
      (response: any) => {
        this.customers = response
        console.log(this.customers)
      })
  }
  onSubmit() {
    this.updateCustomer(this.customer);
  }
  updateCustomer(customer: Customer) {
    this.service.updateCustomer(customer)
      .subscribe(
        response => {
        }
      )
  }
  populateForm(customer: Customer) {
    this.customer = customer;
  }

  deleteCustomer(id: string) {
    this.service.deleteCustomer(id).subscribe(
      response => {
        this.getAllCustomers();
      }
    );
  }
}
