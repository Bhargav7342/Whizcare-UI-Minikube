import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHealthHistoryDocComponent } from './view-health-history-doc.component';

describe('ViewHealthHistoryDocComponent', () => {
  let component: ViewHealthHistoryDocComponent;
  let fixture: ComponentFixture<ViewHealthHistoryDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHealthHistoryDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHealthHistoryDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
