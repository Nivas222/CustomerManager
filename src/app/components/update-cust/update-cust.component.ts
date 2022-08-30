import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../../service/customer.service'
@Component({
  selector: 'app-update-cust',
  templateUrl: './update-cust.component.html',
  styleUrls: ['./update-cust.component.css']
})
export class UpdateCustComponent implements OnInit {
  title = 'customers';
  customers: Customer[] = [];

  constructor(public router: Router, private service: CustomerService) { }
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
  getAllCustomers(){
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
      response =>{
        this.getAllCustomers();
      }
    )
  }
  populateForm(customer: Customer) {
    this.customer = customer;
  }
}
