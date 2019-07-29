import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('JakdojadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
