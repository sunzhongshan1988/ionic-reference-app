import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobalProfitPage } from './global-profit.page';

describe('GlobalProfitPage', () => {
  let component: GlobalProfitPage;
  let fixture: ComponentFixture<GlobalProfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalProfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalProfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
