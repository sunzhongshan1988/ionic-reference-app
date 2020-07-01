import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  constructor() { }
  itemStatus = false;
  item: Array<{
    avatar: string,
    text: string
  }> = [];
  ngOnInit() {
    this.getList();
  }
 getList() {
    const list20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    list20.forEach((value, index, array) => {
      this.item.push({
        avatar: 'assets/images/ionic/svg-avatar-01.svg',
        text: `This is item ${index}`
      });
    });
    this.itemStatus = true;
  }
}
