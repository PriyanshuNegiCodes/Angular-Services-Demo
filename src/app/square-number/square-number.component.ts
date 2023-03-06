import { Component } from '@angular/core';
import { SquareService } from '../square.service';

@Component({
  selector: 'app-square-number',
  templateUrl: './square-number.component.html',
  styleUrls: ['./square-number.component.css']
})
export class SquareNumberComponent {
 
  // result:any;
  // constructor(private squareSerivce:SquareService){}
  // square(inputValu:any){
  //   this.result=this.squareSerivce.squareNumber(inputValu);
  // }
  result: any;
  numberInput=0;
  constructor(private squareService:SquareService){
  }
  squareNum(){
    this.result=this.squareService.squareNumber(this.numberInput);
  }
}
