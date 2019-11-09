import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadadsComponent } from './uploadads.component';

describe('UploadadsComponent', () => {
  let component: UploadadsComponent;
  let fixture: ComponentFixture<UploadadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
