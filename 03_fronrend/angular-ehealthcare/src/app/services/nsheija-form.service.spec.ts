import { TestBed } from '@angular/core/testing';

import { NsheijaFormService } from './nsheija-form.service';

describe('NsheijaFormService', () => {
  let service: NsheijaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NsheijaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
