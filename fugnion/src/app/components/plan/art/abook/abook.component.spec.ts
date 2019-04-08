import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbookComponent } from './abook.component';

describe('AbookComponent', () => {
  let component: AbookComponent;
  let fixture: ComponentFixture<AbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
