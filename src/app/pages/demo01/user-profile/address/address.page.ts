import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../../core/services/global.service';
import {PickerController} from '@ionic/angular';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

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
  isLoading = false;

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

    await picker.present();
  }
  submitAddress(from: any) {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 2000);
  }
  clearInput(name: string) {
    this.addressForm.setControl(name, new FormControl('', Validators.required));
  }
}
