import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';
import {NgForm} from '@angular/forms'
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  ngForm: any;
  constructor(public router: Router, private service: CustomerService,private toastr:ToastrService) { }

  customer: Customer = {
    id: '',
    firstName: '',
    age: 0,
    email: '',
    phoneNumber: 0,
    gender: ''
  }
  
  ngOnInit(): void {    
    
  }
  showCust() {
    this.router.navigateByUrl('showCust')
  }
  removeCust() {
    this.router.navigateByUrl('removeCust')
  }
  updateCust() {
    this.router.navigateByUrl('updateCust')
  }
  onSubmit(form:NgForm) {
    this.service.addCustomer(this.customer)
      .subscribe(
        response => {
          this.router.navigateByUrl('');
          form.reset();
          this.toastr.success("Customer added")
        }
      )
  }
}