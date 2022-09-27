import { Component, OnInit, TemplateRef } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../../service/customer.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-cust',
  templateUrl: './remove-cust.component.html',
  styleUrls: ['./remove-cust.component.css']
})
export class RemoveCustComponent implements OnInit {
  masterSelect: boolean;
  checkbox: boolean;
  deleteMultiple: boolean;
  searchText: any;
  title = 'customers';
  id_: string;
  customers: Customer[] = [];
  modalRef: BsModalRef<unknown>;
  message: string;
  constructor(private router:Router, private service: CustomerService, private confirmationDialogService: ConfirmationDialogService, private modalService: BsModalService) { }

  totalLength: any;
  page: number = 1;
  str:string;

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
  deleteCustomer(template: TemplateRef<any>, id: string) {
    this.id_ = id;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    /* this.service.deleteCustomer(id).subscribe(
      (response:any) => { 
        this.getAllCustomers();
      } */
  }
  confirm(): void {
    this.service.deleteCustomer(this.id_).subscribe(
      (response: any) => {
        this.getAllCustomers();
      }
    );
    this.modalService.hide();
  }
  decline(): void {
    this.modalService.hide();

  }
  key: string = '';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  selectAll(e: any) {
    /*    let checkBoxes = document.querySelectorAll('.form-check-input');
       checkBoxes.forEach(ele=>ele.checkboxChange()) */

    this.checkbox = !this.masterSelect;
  };
  checkboxChange(e: any) {


  }
  onCustomer(customer: Customer) {
    //console.log(JSON.stringify(JSON.stringify(customer.id)).slice(1,-2))
    //console.log(JSON.stringify(Number(localStorage.getItem("cust"))))
    localStorage.setItem("cust", JSON.stringify(customer.id));
    //this.service.saveCustomer(customer)
    this.router.navigateByUrl(JSON.stringify(customer.id))
  }
  deleteSelected(){
    if(this.masterSelect==true){
      this.service.deleteAll().subscribe(
        response=>(
           this.getAllCustomers()
      ));
    }
  }
}


/* function id(id: any) {
  throw new Error('Function not implemented.');  
} */
