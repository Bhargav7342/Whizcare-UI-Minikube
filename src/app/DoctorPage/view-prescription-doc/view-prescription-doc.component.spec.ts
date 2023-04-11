import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrescriptionDocComponent } from './view-prescription-doc.component';

describe('ViewPrescriptionDocComponent', () => {
  let component: ViewPrescriptionDocComponent;
  let fixture: ComponentFixture<ViewPrescriptionDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPrescriptionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
