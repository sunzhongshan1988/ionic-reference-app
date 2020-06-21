import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickersPage } from './pickers.page';

describe('PickersPage', () => {
  let component: PickersPage;
  let fixture: ComponentFixture<PickersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
