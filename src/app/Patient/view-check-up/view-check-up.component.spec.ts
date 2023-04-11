import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheckUpComponent } from './view-check-up.component';

describe('ViewCheckUpComponent', () => {
  let component: ViewCheckUpComponent;
  let fixture: ComponentFixture<ViewCheckUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCheckUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
