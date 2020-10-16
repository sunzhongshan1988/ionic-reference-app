import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  @Input() type: Array<string>;
  @Input() size: number;
  @Input() name: string;
  @Output() link: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }
  // upload file
  async uploadFile(event: any) {
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      if (this.type.indexOf(event.target.files[0].type) > -1) {
        if ((event.target.files[0].size / 1024 / 1024) <= this.size) {
          this.link.emit('Upload...');
        } else {
          await this.commonService.toast(`消息: 上传文件需要小于${this.size}MB！`, 'bottom');
        }
      } else {
        await this.commonService.toast(`消息: 请上传${this.type}格式图片！`, 'bottom');
      }
    }
  }
}
