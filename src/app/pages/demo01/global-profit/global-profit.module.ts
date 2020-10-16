import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalProfitPageRoutingModule } from './global-profit-routing.module';

import { GlobalProfitPage } from './global-profit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalProfitPageRoutingModule
  ],
  declarations: [GlobalProfitPage]
})
export class GlobalProfitPageModule {}
