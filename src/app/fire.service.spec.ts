import { TestBed } from '@angular/core/testing';

import { FireService } from './services/fire.service';

describe('FireService', () => {
  let service: FireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
