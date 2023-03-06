import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmplooyeeDetailsComponent } from './emplooyee-details/emplooyee-details.component';
import { EmployeeServiceService } from './services/employee-service.service';
import { SquareNumberComponent } from './square-number/square-number.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmplooyeeDetailsComponent,
    SquareNumberComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
