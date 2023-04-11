import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthHistoryNurseComponent } from './health-history-nurse.component';

describe('HealthHistoryNurseComponent', () => {
  let component: HealthHistoryNurseComponent;
  let fixture: ComponentFixture<HealthHistoryNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthHistoryNurseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthHistoryNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
