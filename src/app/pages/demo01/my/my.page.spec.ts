import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPage } from './my.page';

describe('MyPage', () => {
  let component: MyPage;
  let fixture: ComponentFixture<MyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
