import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoarriveComponent } from './howtoarrive.component';

describe('HowtoarriveComponent', () => {
  let component: HowtoarriveComponent;
  let fixture: ComponentFixture<HowtoarriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoarriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoarriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
