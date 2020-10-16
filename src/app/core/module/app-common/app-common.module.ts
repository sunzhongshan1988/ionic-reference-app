import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadComponent} from './upload/upload.component';
import { UploadDirective } from './upload/upload.directive';

@NgModule({
  declarations: [UploadComponent, UploadDirective],
  imports: [
    CommonModule
  ],
  exports: [UploadComponent, UploadDirective]
})
export class AppCommonModule { }
