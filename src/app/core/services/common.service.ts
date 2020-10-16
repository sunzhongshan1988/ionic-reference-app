import { Injectable } from '@angular/core';
import {ActionSheetController, ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private storage: Storage,
              public toastController: ToastController,
              public actionSheetController: ActionSheetController) {}

  async toast(message: string, header?: string , position?: 'bottom' | 'middle' | 'top') {
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

  timer(period: number, count: number) {
    return interval(period).pipe(take(count));
  }

  // Toggle theme
  setTheme(theme: 'dark' | 'light') {
    this.storage.ready().then(
      r => {
        this.storage.set('theme', theme).then(
            () => document.body.setAttribute('theme', theme)
          );
    });
  }
  // Recover theme
  recoverTheme() {
    this.storage.ready().then(
      r => {
        this.storage.get('theme').then(
          (theme) => document.body.setAttribute('theme', theme)
        );
      });
  }

  async uploadActionSheet(name: string) {
    const actionSheet = await this.actionSheetController.create({
      header: '文件上传',
      buttons: [{
        text: '文件',
        icon: 'folder-outline',
        handler: () => {
          document.getElementById(name).click();
        }
      }, {
        text: '拍照',
        icon: 'camera-outline',
        handler: () => {
          document.getElementById(`${name}Camera`).click();
        }
      }]
    });
    await actionSheet.present();
  }
}

