import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../core/services/global.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  constructor(public globalVarService: GlobalService) {}
  segment: any;
  ngOnInit() {
    this.segment = 'videos';
  }

}
