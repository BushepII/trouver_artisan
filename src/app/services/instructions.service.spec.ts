import { TestBed } from '@angular/core/testing';

import { InstructionService } from './instructions.service';

describe('InstructionsService', () => {
  let service: InstructionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
