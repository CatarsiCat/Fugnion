import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristinfoComponent } from './touristinfo.component';

describe('TouristinfoComponent', () => {
  let component: TouristinfoComponent;
  let fixture: ComponentFixture<TouristinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
