import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Right4Component } from './right4.component';

describe('Right4Component', () => {
  let component: Right4Component;
  let fixture: ComponentFixture<Right4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Right4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Right4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
