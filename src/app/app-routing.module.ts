import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { RemoveCustComponent } from './components/remove-cust/remove-cust.component';
import { ShowCustComponent } from './components/show-cust/show-cust.component';
import { UpdateCustComponent } from './components/update-cust/update-cust.component';

const routes: Routes = [
  {
    path:'',
    component:FirstPageComponent
  },
  {
    path:'showCust',
    component:ShowCustComponent
  },
  {
    path:'removeCust',
    component:RemoveCustComponent
  },
  {
    path:'updateCust',
    component:UpdateCustComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
