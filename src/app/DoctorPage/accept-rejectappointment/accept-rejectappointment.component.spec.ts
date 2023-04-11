import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectappointmentComponent } from './accept-rejectappointment.component';

describe('AcceptRejectappointmentComponent', () => {
  let component: AcceptRejectappointmentComponent;
  let fixture: ComponentFixture<AcceptRejectappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRejectappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptRejectappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
