import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo01PageRoutingModule } from './demo01-routing.module';

import { Demo01Page } from './demo01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo01PageRoutingModule
  ],
  declarations: [Demo01Page]
})
export class Demo01PageModule {}
