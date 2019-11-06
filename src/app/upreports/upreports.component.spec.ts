import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpreportsComponent } from './upreports.component';

describe('UpreportsComponent', () => {
  let component: UpreportsComponent;
  let fixture: ComponentFixture<UpreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
