import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsfortodayComponent } from './appointmentsfortoday.component';

describe('AppointmentsfortodayComponent', () => {
  let component: AppointmentsfortodayComponent;
  let fixture: ComponentFixture<AppointmentsfortodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsfortodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsfortodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
