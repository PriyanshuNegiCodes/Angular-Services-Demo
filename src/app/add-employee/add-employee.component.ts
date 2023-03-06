import { Component } from '@angular/core';
import { IEmployee } from '../Model/IEmployees';
import { EmployeeServiceService } from '../services/employee-service.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee:IEmployee={
    id:0,
    name:"",
    age:0
  }
  //register the service 
  constructor(private myservice:EmployeeServiceService){}
  add(){
   this.myservice.sendEmployee(this.employee).subscribe(data=>alert("data added"), e=> alert("error")) 
  }

}
