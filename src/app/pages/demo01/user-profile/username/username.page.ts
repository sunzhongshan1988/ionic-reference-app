import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../../core/services/global.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  constructor(private fb: FormBuilder,
              public gvs: GlobalService) { }
  usernameForm = this.fb.group({
    username: ['', Validators.required],
  });
  isLoading = false;
  ngOnInit() {
  }
  submitUsername(usernameForm: {username: string}) {
    this.isLoading = true;
  }
  clearInput(name: string) {
    this.usernameForm.reset({name: ''});
  }
}
