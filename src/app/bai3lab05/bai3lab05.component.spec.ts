import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3lab05Component } from './bai3lab05.component';

describe('Bai3lab05Component', () => {
  let component: Bai3lab05Component;
  let fixture: ComponentFixture<Bai3lab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai3lab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai3lab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
