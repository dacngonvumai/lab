import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2lab05Component } from './bai2lab05.component';

describe('Bai2lab05Component', () => {
  let component: Bai2lab05Component;
  let fixture: ComponentFixture<Bai2lab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai2lab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai2lab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
