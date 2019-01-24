import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-case-three',
  templateUrl: './case-three.component.html',
  styleUrls: ['./case-three.component.css']
})
export class CaseThreeComponent implements OnInit {

  input1: number
  input2: number
  result: number
  isCollapse: boolean
  constructor() { }

  ngOnInit() {
  }

  calculate(){
    this.result = this.input1 * this.input2
    // this.isCollapse = !this.isCollapse
    this.isCollapse = true
    this.input1 = null
    this.input2 = null
  }
  
}
