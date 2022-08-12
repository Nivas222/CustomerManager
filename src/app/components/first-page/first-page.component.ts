import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  constructor(public router: Router){}
  ngOnInit(): void {
  }
  showCust(){
    this.router.navigateByUrl('showCust')
  }
}