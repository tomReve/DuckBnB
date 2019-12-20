import { TestBed } from '@angular/core/testing';

import { LogementService } from './logement.service';

describe('LogementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogementService = TestBed.get(LogementService);
    expect(service).toBeTruthy();
  });
});
