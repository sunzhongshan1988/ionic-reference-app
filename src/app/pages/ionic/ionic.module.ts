import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicPageRoutingModule } from './ionic-routing.module';

import { IonicPage } from './ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageRoutingModule
  ],
  declarations: [IonicPage]
})
export class IonicPageModule {}
