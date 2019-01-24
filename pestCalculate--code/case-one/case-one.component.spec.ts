import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseOneComponent } from './case-one.component';

describe('CaseOneComponent', () => {
  let component: CaseOneComponent;
  let fixture: ComponentFixture<CaseOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
