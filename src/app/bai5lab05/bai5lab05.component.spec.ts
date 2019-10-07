import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai5lab05Component } from './bai5lab05.component';

describe('Bai5lab05Component', () => {
  let component: Bai5lab05Component;
  let fixture: ComponentFixture<Bai5lab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai5lab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai5lab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
