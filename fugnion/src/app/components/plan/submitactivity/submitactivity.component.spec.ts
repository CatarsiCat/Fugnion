import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitactivityComponent } from './submitactivity.component';

describe('SubmitactivityComponent', () => {
  let component: SubmitactivityComponent;
  let fixture: ComponentFixture<SubmitactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
