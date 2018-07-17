import { TestBed, async, inject } from '@angular/core/testing';

import { UserDetailGuard } from './user-detail.guard';

describe('UserDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailGuard]
    });
  });

  it('should ...', inject([UserDetailGuard], (guard: UserDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
