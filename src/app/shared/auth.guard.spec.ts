/* <!--
* Title: auth.guard.spec.ts
* Author: Professor Krasso
* Date: 25 September 2020
* Modified: Joann Saeou
* Description: auth guard spec ts  component -->  */


import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
