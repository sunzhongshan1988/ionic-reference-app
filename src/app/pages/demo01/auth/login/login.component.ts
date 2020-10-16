import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CommonService} from '../../../../core/services/common.service';
import {LoginForm} from '../../../../core/interface/auth';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private commonService: CommonService) { }
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    code: ['', Validators.required]
  });
  verifyBtText = '获取验证码';
  isLoadingVerify = false;
  isLoadingLogin = false;
  passwordType = 'password';
  ngOnInit() {}
  login(form: LoginForm) {
    this.isLoadingLogin = true;
  }
  getVerifyCode(username: string) {
    this.isLoadingVerify = true;
  }
  timer(count: number) {
    this.commonService.timer(1000, count)
      .subscribe((currentCount) => {
        this.verifyBtText = `${60 - currentCount}S`;
        if (currentCount === 59) {
          this.isLoadingVerify = false;
          this.verifyBtText = '获取验证码';
        }
      });
  }
  clearInput(name: string) {
    this.loginForm.setControl(name, new FormControl('', Validators.required));
  }
  changeInputType(name: string) {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
