import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Customer } from './models/customer.model';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customer_management_system';
  today = new Date();
  ngForm: any;
  model: NgbDateStruct;
  dob: Date;

  constructor(public router: Router, private service: CustomerService, private toastr: ToastrService) { }
  customer: Customer = {
    id: 0,
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
  onSubmit(form: NgForm) {

    this.service.addCustomer(this.customer)
      .subscribe(
        response => {
          this.router.navigateByUrl('');
          form.reset();
          this.toastr.success("New customer added")
        }
      )
  }
  calculateAge() {
    let newAge = new Date(this.model.year, this.model.month - 1, this.model.day)
    let timeDiff = Math.abs(Date.now() - newAge.getTime());
    this.customer.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    //this.customer.age=this.today.getFullYear() - this.model.year;
  }
}

