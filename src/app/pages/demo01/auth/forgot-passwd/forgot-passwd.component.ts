import { Component, OnInit } from '@angular/core';
import {ForgotForm, SignUpForm} from '../../../../core/interface/auth';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../../core/services/common.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-passwd',
  templateUrl: './forgot-passwd.component.html',
  styleUrls: ['./forgot-passwd.component.scss'],
})
export class ForgotPasswdComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService) { }

  verifyBtText = '获取验证码';
  isLoadingVerify = false;
  isLoading = false;
  passwordType = 'password';
  rpasswordType = 'password';
  forgotPasswdForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rpassword: ['', Validators.required],
    code: ['', Validators.required],
  });
  ngOnInit() {}
  forgotPasswd(form: ForgotForm) {
    this.isLoading = true;
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
    this.forgotPasswdForm.setControl(name, new FormControl('', Validators.required));
  }
  changeInputType(name: string) {
    if (name === 'password') {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    } else if (name === 'rpassword') {
      this.rpasswordType = this.rpasswordType === 'password' ? 'text' : 'password';
    }
  }
}
