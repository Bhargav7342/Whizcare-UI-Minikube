import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentrejectedComponent } from './appointmentrejected.component';

describe('AppointmentrejectedComponent', () => {
  let component: AppointmentrejectedComponent;
  let fixture: ComponentFixture<AppointmentrejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentrejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentrejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
