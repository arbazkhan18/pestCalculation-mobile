import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-case-two',
  templateUrl: './case-two.component.html',
  styleUrls: ['./case-two.component.css']
})
export class CaseTwoComponent implements OnInit {

  input1: number
  input2: number
  result: number
  isCollapse: boolean 
  constructor() { }

  ngOnInit() {
  }

  calculate(){
    console.log(this.input1)
    console.log(this.input2)
    this.result = this.input1 * this.input2
    console.log(this.result)
    // this.isCollapse = !this.isCollapse
    this.isCollapse = true
    this.input1 = null
    this.input2 = null
  }
 

}
