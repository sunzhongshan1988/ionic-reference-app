import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../core/services/common.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

  clicked() {
    this.commonService.toast('Clicked!');
  }
}
