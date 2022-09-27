import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css'],
})
export class ShowCustComponent implements OnInit {
  searchText:any;
  title = 'customers';
  firstName: any;
  customers: Customer[] = [];
  constructor(private service: CustomerService, private router: Router) { }

  totalLength:any;
  page:number=1;

  customer: Customer = {
    id: 0,
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
        this.totalLength=response.length;
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

  onCustomer(customer: Customer) {
    localStorage.setItem("cust",JSON.stringify(customer.id));
    console.log(JSON.stringify(localStorage.getItem("cust")).slice(1,-1));
    //this.service.saveCustomer(customer)
    //this.router.navigateByUrl(JSON.stringify(localStorage.getItem("cust")).slice(1, -1))
    this.router.navigateByUrl(JSON.stringify(localStorage.getItem("cust")).slice(1,-1))
  }

  key: string = '';
  reverse: boolean = false;
  sort(key: string) {
    console.log("here")
    this.key = key;
    this.reverse = !this.reverse;
  }
  Search(){
    if(this.firstName==""){
      this.ngOnInit();
    }
    else{
      this.customers=this.customers.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }
}  