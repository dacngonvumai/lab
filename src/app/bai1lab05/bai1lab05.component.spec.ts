import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1lab05Component } from './bai1lab05.component';

describe('Bai1lab05Component', () => {
  let component: Bai1lab05Component;
  let fixture: ComponentFixture<Bai1lab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai1lab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1lab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
