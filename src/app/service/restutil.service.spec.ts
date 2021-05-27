import { TestBed } from '@angular/core/testing';

import { RestutilService } from './restutil.service';

describe('RestutilService', () => {
  let service: RestutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
