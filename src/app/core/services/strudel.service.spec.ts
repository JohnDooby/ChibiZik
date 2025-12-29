import { TestBed } from '@angular/core/testing';

import { StrudelService } from './strudel.service';

describe('StrudelService', () => {
  let service: StrudelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrudelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
