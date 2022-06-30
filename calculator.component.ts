import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isShow!: boolean;
  isBtnShow!: boolean;
  monthlyincome!: number;
  loan!: number;
  roi!: number;
  mnts!: number;
  emi: any;
  loanemi: any;
  constructor() { }

  ngOnInit() {
  }
  emiCal() {
    this.emi = 60 * 0.6 * this.monthlyincome
    //this.isShow = true;
  }

  goToEmiCal() {

    this.isShow = true;
  }
  emiBtnShow() {

    this.loanemi = this.loan * this.roi / 12 * (((1 + this.roi / 12) ^ this.mnts) / ((1 + this.roi / 12) ^ this.mnts - 1));
  }
}
