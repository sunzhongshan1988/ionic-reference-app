import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CommonService} from '../../core/services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private menu: MenuController,
              private commonService: CommonService) {}

  ngOnInit(): void {

  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }
  changeTheme($event) {
   if ($event.detail.checked) {
     this.commonService.setTheme('dark');
   } else {
     this.commonService.setTheme('light');
   }
  }


}
