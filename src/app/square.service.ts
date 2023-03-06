import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  constructor() { }

  squareNumber(number: any){
    return number*number;
  }
}
