import { Component, OnInit } from '@angular/core';
import {PickerController} from "@ionic/angular";
import {CommonService} from "../../../core/services/common.service";

@Component({
  selector: 'app-pickers',
  templateUrl: './pickers.page.html',
  styleUrls: ['./pickers.page.scss'],
})
export class PickersPage implements OnInit {

  constructor(public pickerController: PickerController,
              public commonService: CommonService) { }

  public defaultColumnOptions = [
    [
      'Dog',
      'Cat',
      'Bird',
      'Lizard',
      'Chinchilla'
    ]
  ];

  public multiColumnOptions = [
    [
      'Minified',
      'Responsive',
      'Full Stack',
      'Mobile First',
      'Serverless'
    ],
    [
      'Tomato',
      'Avocado',
      'Onion',
      'Potato',
      'Artichoke'
    ]
  ];
  ngOnInit() {
  }
  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions){
    const picker = await this.pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(value)
            this.commonService.toast(`${value['col-0'].text} ${value['col-1']?value['col-1'].text:''}`);
          }
        }
      ]
    });
    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }
    return columns;
  }

  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }
    return options;
  }

}
