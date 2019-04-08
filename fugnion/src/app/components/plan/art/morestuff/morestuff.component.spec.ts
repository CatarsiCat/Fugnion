import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorestuffComponent } from './morestuff.component';

describe('MorestuffComponent', () => {
  let component: MorestuffComponent;
  let fixture: ComponentFixture<MorestuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorestuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorestuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
