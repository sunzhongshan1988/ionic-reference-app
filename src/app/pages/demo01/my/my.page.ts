import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {GlobalService} from '../../../core/services/global.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {

  constructor(public gvs: GlobalService,
              public alertController: AlertController) { }

  ngOnInit() {
  }
  logout() {
  }
  async logoutAlertConfirm() {
    const alert = await this.alertController.create({
      header: `注销登录`,
      message: `是否注销登录？`,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: '确定',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

}
