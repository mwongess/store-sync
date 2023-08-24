import { TestBed } from '@angular/core/testing';

import { AppwriteAuthService } from './appwrite-auth.service';

describe('AppwriteAuthService', () => {
  let service: AppwriteAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppwriteAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
