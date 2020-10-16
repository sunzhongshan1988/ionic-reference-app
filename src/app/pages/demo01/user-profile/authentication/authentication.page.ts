import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../../core/services/global.service';
import {CommonService} from '../../../../core/services/common.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(public gvs: GlobalService,
              public commonService: CommonService) { }
  public segment = 'IDCard';
  public uploadFileType = ['image/png', 'image/jpeg'];
  ngOnInit() {
  }
  async upload(name: string) {
    await this.commonService.uploadActionSheet(name);
  }
  frontLink(link: string) {
    console.log(link);
  }
  backLink(link: string) {
    console.log(link);
  }
}
