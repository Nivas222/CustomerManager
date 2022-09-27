import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { formatCurrency } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
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
    let newAge=new Date(this.model.year,this.model.month-1,this.model.day)
    let timeDiff = Math.abs(Date.now() - newAge.getTime());
    this.customer.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    //this.customer.age=this.today.getFullYear() - this.model.year;
  }
}