import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TstupComponent } from './tstup.component';

describe('TstupComponent', () => {
  let component: TstupComponent;
  let fixture: ComponentFixture<TstupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
