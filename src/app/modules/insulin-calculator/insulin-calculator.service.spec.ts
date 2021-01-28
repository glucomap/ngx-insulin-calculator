import { TestBed } from '@angular/core/testing';

import { InsulinCalculatorService } from './insulin-calculator.service';

describe('InsulinCalculatorService', () => {
  let service: InsulinCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsulinCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
