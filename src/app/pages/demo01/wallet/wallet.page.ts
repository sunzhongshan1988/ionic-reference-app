import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {PickerController} from '@ionic/angular';
import {GlobalService} from '../../../core/services/global.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(public pickerController: PickerController,
              private fb: FormBuilder,
              public gvs: GlobalService) { }
  addressForm = this.fb.group({
    username: ['', Validators.required],
    number: ['', Validators.required],
    country: [this.gvs.countryPickerArray[0].options[0].text, Validators.required],
    address: ['', Validators.required],
    zip: ['', Validators.required]
  });
  isLoadingCrypto = false;
  isLoadingBank = false;
  isLoadingAlipay = false;
  ngOnInit() {
  }
  async countryPicker() {
    const picker = await this.pickerController.create({
      columns: this.gvs.countryPickerArray,
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确定',
          handler: (value) => {
            this.addressForm.setControl('country', new FormControl(value.country.text, Validators.required));
          }
        }
      ]
    });
  }
}
