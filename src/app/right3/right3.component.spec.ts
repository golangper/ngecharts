import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Right3Component } from './right3.component';

describe('Right3Component', () => {
  let component: Right3Component;
  let fixture: ComponentFixture<Right3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Right3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Right3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
