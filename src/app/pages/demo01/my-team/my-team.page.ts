import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../core/services/global.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {

  constructor(public gvs: GlobalService) { }

  ngOnInit() {
  }

}
