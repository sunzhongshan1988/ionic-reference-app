import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

  constructor() { }
  public segment: string;
  ngOnInit() {
    this.segment = '1';
  }

}
