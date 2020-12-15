import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogeoPage } from './logeo.page';

describe('LogeoPage', () => {
  let component: LogeoPage;
  let fixture: ComponentFixture<LogeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogeoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
