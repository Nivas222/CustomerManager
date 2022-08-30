import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCustComponent } from './components/show-cust/show-cust.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { RemoveCustComponent } from './components/remove-cust/remove-cust.component';
import { UpdateCustComponent } from './components/update-cust/update-cust.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ShowCustComponent,
    FirstPageComponent,
    RemoveCustComponent,
    UpdateCustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
