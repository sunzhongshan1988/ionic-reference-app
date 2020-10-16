import {ApplicationRef, Component, NgZone, OnInit} from '@angular/core';
import {first, switchMap} from 'rxjs/operators';
import {interval} from 'rxjs';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  constructor(private zone: NgZone,
              private appRef: ApplicationRef) {}
  public isBuying: boolean;
  public timer01 = 5;
  public timer02 = '00:00:00';
  mateTotal: any['data'] = {
    today: {
      reward: 0,
      unit: 0,
      total: 0,
      dealerId: 0,
      price: 0,
      fee: 0,
      cnt: 0
    },
    team: {
      scoreAll: 0,
      scoreMonth: 0,
      grade: 1,
      cntTeam: 0,
    }
  };
  ngOnInit() {
    this.isBuying = false;
    this.getMateTotal();
    this.appRef.isStable.pipe(
      first(stable => stable),
      switchMap(() => interval(1000))
    ).subscribe(counter => this.zone.run(() => {
        if (this.timer01 < 6 && this.timer01 > 1 && this.isBuying) {
          this.timer01 = this.timer01 - 1;
        } else {
          this.timer01 = 5;
        }
        this.timer02 = this.countDown();
      })
    );
  }

  getMateTotal() {
  }
  submitMateOpen() {
  }
  submitMateClose() {
  }
  countDown() {
    const now = new Date(Date.now());
    const hours = (23 - now.getHours()).toString().padStart(2, '0');
    const minutes = (59 - now.getMinutes()).toString().padStart(2, '0');
    const second = (59 - now.getSeconds()).toString().padStart(2, '0');
    return `${hours}:${minutes}:${second}`;
  }

}
