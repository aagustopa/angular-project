import { TestBed } from '@angular/core/testing';

import { UpdateGuardGuard } from './update-guard.guard';

describe('UpdateGuardGuard', () => {
  let guard: UpdateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
