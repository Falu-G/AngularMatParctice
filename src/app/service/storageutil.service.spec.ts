import { TestBed } from '@angular/core/testing';

import { StorageutilService } from './storageutil.service';

describe('StorageutilService', () => {
  let service: StorageutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
