import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../../core/services/global.service';
import {CommonService} from '../../../core/services/common.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(public gvs: GlobalService,
              public commonService: CommonService) { }


  uploadFileType = ['image/png', 'image/jpeg'];
  ngOnInit() {

  }
  async uploadHead(name: string) {
    await this.commonService.uploadActionSheet(name);
  }
  fileLink($event) {
    this.gvs.dealerInfo.headImg = $event;
    this.submitDealerHead($event);
  }
  submitDealerHead(file: string) {
  }
}
