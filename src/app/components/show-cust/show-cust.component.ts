import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service'
@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((res: any)=>{console.log(res)})
  }

}
