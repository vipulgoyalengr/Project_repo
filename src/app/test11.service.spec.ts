import { TestBed } from '@angular/core/testing';

import { Test11Service } from './test11.service';

describe('Test11Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test11Service = TestBed.get(Test11Service);
    expect(service).toBeTruthy();
  });
});
