import { TestBed } from '@angular/core/testing';

import { ArtisanService } from './artisans.service';

describe('ArtisansService', () => {
  let service: ArtisanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
