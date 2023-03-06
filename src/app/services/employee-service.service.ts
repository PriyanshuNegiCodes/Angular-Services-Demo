import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../Model/IEmployees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http:HttpClient) { }

  getEmployee(): Observable<IEmployee[]>
  {
  return this.http.get<IEmployee[]>('http://localhost:3000/Employee')
  }  
}
