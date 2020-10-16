import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
  }
  // Global variable
  public logoRound = '/assets/images/logo/logo-round-1024x1024.png';
  public logoDark = '/assets/images/logo/logo-256x800-dark.png';
  public logoLight = '/assets/images/logo/logo-256x800-light.png';
  public countryPickerArray = [
    {name: 'country', options: [
        {text: '中国', value: 0, selected: true},
        {text: '香港', value: 1},
        {text: '台湾', value: 2}
        ]
    }
  ];

  dealerInfo: any['data'] = {
    address: '',
    alipayNo: '',
    bankAddress: '',
    bankCountry: '',
    bankName: '',
    bankNo: '',
    bankPhone: '',
    bankUserName: '',
    cardHand: '',
    cardName: '',
    cardNegative: '',
    cardNo: '',
    cardPositive: '',
    cardType: 1,
    createTime: '2020-05-27 15:31:57',
    email: '',
    gender: true,
    headImg: '',
    id: 0,
    inviteCode: 'XXXXXX',
    inviteNum: 0,
    isAlipay: false,
    isBank: false,
    isEmail: false,
    isPhone: false,
    isWeixin: false,
    nickname: '请设置昵称',
    pId: 0,
    passwordFunds: '',
    phone: '',
    status: 1,
    statusCert: 0,
    updateTime: '2020-05-27 15:31:57',
    weixinNo: ''
  };
  signGrade: any['data'] = {
    createTime: '2020-05-27 15:31:57',
    grade: 0,
    mp: 0,
    name: 'Shopper 100',
    reward: 0,
    rmb: 0,
    sort: 0,
    speed: 0,
    status: 0,
    updateTime: '2020-05-27 15:31:57',
    usdt: 0,
  };

  // Method

}
