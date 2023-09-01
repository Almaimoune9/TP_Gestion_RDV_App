import { TestBed } from '@angular/core/testing';

import { RdvService } from './mes_services/rdv.service';

describe('RdvService', () => {
  let service: RdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
