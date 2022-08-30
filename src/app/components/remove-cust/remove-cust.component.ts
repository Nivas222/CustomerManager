import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../../service/customer.service'

@Component({
  selector: 'app-remove-cust',
  templateUrl: './remove-cust.component.html',
  styleUrls: ['./remove-cust.component.css']
})
export class RemoveCustComponent implements OnInit {
  title = 'customers';
  customers: Customer[] = [];
  constructor(private service: CustomerService) { }

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
  deleteCustomer(id: string) {
    this.service.deleteCustomer(id).subscribe(
      response => {
        this.getAllCustomers();
      }
    );
  }
}