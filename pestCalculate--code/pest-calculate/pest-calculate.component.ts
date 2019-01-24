import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-pest-calculate',
  templateUrl: './pest-calculate.component.html',
  styleUrls: ['./pest-calculate.component.css']
})
export class PestCalculateComponent implements OnInit {

  public solution;
  public selectedCase;
  public optSelection: string;
  constructor() { }

  ngOnInit() { }

  solutions = [
    { name: 'Gram a.i. per hectare', value: 'opt1' }, { name: 'ML/litres of water', value: 'opt2' }, { name: 'Gram/litre of water', value: 'opt3' }];

  public navigate() {
    this.optSelection = this.selectedCase;
  }

  public goToOptions() {
    this.optSelection = null;
  }

}
