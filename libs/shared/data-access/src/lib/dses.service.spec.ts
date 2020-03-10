import { TestBed } from '@angular/core/testing';

import { DsesService } from './dses.service';

describe('DsesService', () => {
  let service: DsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
