import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private storage: Storage,
              public toastController: ToastController) {}

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

  // Toggle theme
  setTheme(theme: 'dark' | 'light') {
    this.storage.ready().then(
      r => {
        this.storage.set('theme', theme).then(
            () => document.body.setAttribute('theme', theme)
          );
    })
  }
  // Recover theme
  recoverTheme() {
    this.storage.ready().then(
      r => {
        this.storage.get('theme').then(
          (theme) => document.body.setAttribute('theme', theme)
        );
      })
  }
}

