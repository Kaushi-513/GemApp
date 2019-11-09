import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageadsComponent } from './manageads.component';

describe('ManageadsComponent', () => {
  let component: ManageadsComponent;
  let fixture: ComponentFixture<ManageadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
