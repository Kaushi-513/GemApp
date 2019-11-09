import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveADSComponent } from './aprove-ads.component';

describe('AproveADSComponent', () => {
  let component: AproveADSComponent;
  let fixture: ComponentFixture<AproveADSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveADSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveADSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
