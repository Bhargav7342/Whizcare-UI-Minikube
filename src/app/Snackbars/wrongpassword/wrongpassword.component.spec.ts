import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongpasswordComponent } from './wrongpassword.component';

describe('WrongpasswordComponent', () => {
  let component: WrongpasswordComponent;
  let fixture: ComponentFixture<WrongpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
