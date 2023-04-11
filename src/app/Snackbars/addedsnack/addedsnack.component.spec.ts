import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedsnackComponent } from './addedsnack.component';

describe('AddedsnackComponent', () => {
  let component: AddedsnackComponent;
  let fixture: ComponentFixture<AddedsnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedsnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
