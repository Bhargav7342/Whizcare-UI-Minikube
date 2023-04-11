import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullloginsnackComponent } from './successfullloginsnack.component';

describe('SuccessfullloginsnackComponent', () => {
  let component: SuccessfullloginsnackComponent;
  let fixture: ComponentFixture<SuccessfullloginsnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullloginsnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfullloginsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
