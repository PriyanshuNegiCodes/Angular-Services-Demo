import { Component } from '@angular/core';
import { EmplooyeeDetailsComponent } from '../emplooyee-details/emplooyee-details.component';
import { EmployeeServiceService } from '../services/employee-service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees:any;

  constructor(private list:EmployeeServiceService){}
  ngOnInit(){
    this.employees=this.list.getEmployee().subscribe(data=>this.employees=data);
  }
}
