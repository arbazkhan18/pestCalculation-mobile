import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseThreeComponent } from './case-three.component';

describe('CaseThreeComponent', () => {
  let component: CaseThreeComponent;
  let fixture: ComponentFixture<CaseThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
