import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CommonService} from '../../../../core/services/common.service';
import {SignUpForm} from '../../../../core/interface/auth';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService) { }

  signUpForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rpassword: ['', Validators.required],
    inviteCode: ['', Validators.required],
    agreement: [false, Validators.requiredTrue],
    code: ['', Validators.required],
  });
  verifyBtText = '获取验证码';
  isLoadingVerify = false;
  isLoadingSignUp = false;
  passwordType = 'password';
  rpasswordType = 'password';

  ngOnInit() {
  }

  signUp(form: SignUpForm) {
    this.isLoadingSignUp = true;
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
    this.signUpForm.setControl(name, new FormControl('', Validators.required));
  }
  changeInputType(name: string) {
    if (name === 'password') {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    } else if (name === 'rpassword') {
      this.rpasswordType = this.rpasswordType === 'password' ? 'text' : 'password';
    }
  }
}
