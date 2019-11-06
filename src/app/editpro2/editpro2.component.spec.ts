import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Editpro2Component } from './editpro2.component';

describe('Editpro2Component', () => {
  let component: Editpro2Component;
  let fixture: ComponentFixture<Editpro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editpro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
