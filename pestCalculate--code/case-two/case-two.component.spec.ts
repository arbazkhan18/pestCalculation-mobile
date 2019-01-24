import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTwoComponent } from './case-two.component';

describe('CaseTwoComponent', () => {
  let component: CaseTwoComponent;
  let fixture: ComponentFixture<CaseTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
