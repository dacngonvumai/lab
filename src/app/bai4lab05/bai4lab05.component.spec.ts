import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai4lab05Component } from './bai4lab05.component';

describe('Bai4lab05Component', () => {
  let component: Bai4lab05Component;
  let fixture: ComponentFixture<Bai4lab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai4lab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai4lab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
