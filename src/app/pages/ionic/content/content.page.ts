import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }
  public list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  ngOnInit() {
  }
  toTop(){
    document.querySelector('ion-content').scrollToTop(500);
  }
  toBottom(){
    document.querySelector('ion-content').scrollToBottom(500);
  }
}
