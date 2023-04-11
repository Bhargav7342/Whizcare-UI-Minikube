import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentacceptedComponent } from './appointmentaccepted.component';

describe('AppointmentacceptedComponent', () => {
  let component: AppointmentacceptedComponent;
  let fixture: ComponentFixture<AppointmentacceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentacceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
