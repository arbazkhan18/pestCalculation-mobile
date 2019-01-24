import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'anms-case-one',
  templateUrl: './case-one.component.html',
  styleUrls: ['./case-one.component.css']
})
export class CaseOneComponent implements OnInit {

  input1: number
  input2: number
  input3: number
  result: string
  sum: number
  isCollapse: boolean 
  constructor() { }

  ngOnInit() {
  }

  calculate() {
    console.log(this.input1)
    console.log(this.input2)
    console.log(this.input3)
    this.sum = this.input1/(this.input2/100)
    this.result = (this.sum*this.input3).toFixed(4)
    console.log(this.result)
    this.input1 = null;
    this.input2 = null;
    this.input3 = null;
    // this.isCollapse = !this.isCollapse
    this.isCollapse = true;
  }
 
}
