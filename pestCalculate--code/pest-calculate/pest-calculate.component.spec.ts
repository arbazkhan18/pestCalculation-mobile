import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestCalculateComponent } from './pest-calculate.component';

describe('PestCalculateComponent', () => {
  let component: PestCalculateComponent;
  let fixture: ComponentFixture<PestCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
