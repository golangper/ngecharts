import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Right5Component } from './right5.component';

describe('Right5Component', () => {
  let component: Right5Component;
  let fixture: ComponentFixture<Right5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Right5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Right5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
