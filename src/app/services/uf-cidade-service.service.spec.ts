import { TestBed } from '@angular/core/testing';

import { OutrosFetchServiceService } from './uf-cidade-service.service';

describe('OutrosFetchServiceService', () => {
  let service: OutrosFetchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutrosFetchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
