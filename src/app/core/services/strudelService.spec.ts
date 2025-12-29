import { TestBed } from '@angular/core/testing';

import { StrudelService } from './strudelService';

describe('Strudel', () => {
  let service: StrudelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrudelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
