import { TestBed } from '@angular/core/testing';

import { DuenioServiceService } from './duenio-service.service';

describe('DuenioServiceService', () => {
  let service: DuenioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuenioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
