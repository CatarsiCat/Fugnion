import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorguestsComponent } from './honorguests.component';

describe('HonorguestsComponent', () => {
  let component: HonorguestsComponent;
  let fixture: ComponentFixture<HonorguestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorguestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorguestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
