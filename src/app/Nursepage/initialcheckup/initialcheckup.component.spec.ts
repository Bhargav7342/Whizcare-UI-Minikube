import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialcheckupComponent } from './initialcheckup.component';

describe('InitialcheckupComponent', () => {
  let component: InitialcheckupComponent;
  let fixture: ComponentFixture<InitialcheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialcheckupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialcheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
