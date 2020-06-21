import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickersPageRoutingModule } from './pickers-routing.module';

import { PickersPage } from './pickers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickersPageRoutingModule
  ],
  declarations: [PickersPage]
})
export class PickersPageModule {}
