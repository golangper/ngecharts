import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Right2Component } from './right2.component';

describe('Right2Component', () => {
  let component: Right2Component;
  let fixture: ComponentFixture<Right2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Right2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Right2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
