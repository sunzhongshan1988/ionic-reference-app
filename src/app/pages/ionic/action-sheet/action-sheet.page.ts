import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {CommonService} from '../../../core/services/common.service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController,
              public commonService: CommonService) {}

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: '',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.commonService.toast('Info', 'Delete clicked!', 'bottom');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.commonService.toast('Info', 'Delete clicked!', 'bottom');
        }
      }, {
        text: 'Play',
        icon: 'caret-forward-circle',
        handler: () => {
          this.commonService.toast('Info', 'Play clicked!', 'bottom');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          this.commonService.toast('Info', 'Favorite clicked!', 'bottom');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.commonService.toast('Info', 'Cancel clicked!', 'bottom');
        }
      }]
    });
    await actionSheet.present();
  }
}
