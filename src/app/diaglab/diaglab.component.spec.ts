import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaglabComponent } from './diaglab.component';

describe('DiaglabComponent', () => {
  let component: DiaglabComponent;
  let fixture: ComponentFixture<DiaglabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaglabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaglabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
