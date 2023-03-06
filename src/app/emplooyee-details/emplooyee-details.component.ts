import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-emplooyee-details',
  templateUrl: './emplooyee-details.component.html',
  styleUrls: ['./emplooyee-details.component.css']
})
export class EmplooyeeDetailsComponent {

employees: any
constructor(private myservice:EmployeeServiceService){}
ngOnInit(){
  this.employees=this.myservice.getEmployee().subscribe(data=>this.employees=data);
}

}
