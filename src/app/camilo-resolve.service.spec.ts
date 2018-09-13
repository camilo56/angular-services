import { TestBed, inject } from '@angular/core/testing';

import { CamiloResolveService } from './camilo-resolve.service';

describe('CamiloResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamiloResolveService]
    });
  });

  it('should be created', inject([CamiloResolveService], (service: CamiloResolveService) => {
    expect(service).toBeTruthy();
  }));
});
