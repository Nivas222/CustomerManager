import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-one-customer',
  templateUrl: './one-customer.component.html',
  styleUrls: ['./one-customer.component.css']
})
export class OneCustomerComponent implements OnInit {
  id: number;
  oneCustomer: Customer;
  /*   customer: Customer = {
      id: '',
      firstName: '',
      age: 0,
      email: '',
      phoneNumber: 0,
      gender: ''
    }; */

  constructor(private service: CustomerService,private router:Router) {
  }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem("cust"))
    //console.log(JSON.stringify(this.id))
    //console.log(this.id.slice(1,-1))
    this.getCustById()
  }

  getCustById() {
    //this.service.share.subscribe(x=>this.oneCustomer=x)
    //localStorage.setItem("cust",this.oneCustomer.id)
    this.service.getCustById(this.id).subscribe(
      response => {
        console.log(response)
        this.oneCustomer=response
        //this.router.navigateByUrl(JSON.stringify(this.id))
      }
    );
  }
}
