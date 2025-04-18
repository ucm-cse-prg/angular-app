import { TestBed } from '@angular/core/testing';

import { httpErrorInterceptor } from './http-error.interceptor';

describe('httpErrorInterceptor', () => {
  let service: httpErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [httpErrorInterceptor]
    });
    service = TestBed.inject(httpErrorInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
