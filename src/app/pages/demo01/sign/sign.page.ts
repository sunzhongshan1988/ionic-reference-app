import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  constructor(public alertController: AlertController) { }

  isloading = true;
  signListData: any['data'] = [
    {grade: 1,
      id: 1,
      mp: 1,
      name: '1星',
      usdt: 100,
    },
    {grade: 1,
      id: 1,
      mp: 1,
      name: '1星',
      usdt: 100,
    },
    {grade: 1,
      id: 1,
      mp: 1,
      name: '1星',
      usdt: 100,
    },
    {grade: 1,
      id: 1,
      mp: 1,
      name: '1星',
      usdt: 100,
    },
  ];
  ngOnInit() {
    this.getSignlist();
  }

  newArray(length: number) {
    return new Array(length);
  }
  getSignlist() {
  }
  submitSign(id: number) {
  }
  async signAlertConfirm(usdt: number, name: string, id: number) {
    const alert = await this.alertController.create({
      header: `签约${name}购物者`,
      message: `花费${usdt}USDT`,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: '确定',
          handler: () => {
           this.submitSign(id);
          }
        }
      ]
    });

    await alert.present();
  }
}

