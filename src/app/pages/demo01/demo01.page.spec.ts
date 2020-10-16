import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo01Page } from './demo01.page';

describe('Demo01Page', () => {
  let component: Demo01Page;
  let fixture: ComponentFixture<Demo01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
