import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public toastController: ToastController) {}

  async toast(message: string, header?: string ,position?: 'bottom' | 'middle' | 'top') {
    const toast = await this.toastController.create({
      header,
      message,
      position,
      color: 'primary',
      duration: 1000,
      buttons: [{
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await toast.present();
  }
}

