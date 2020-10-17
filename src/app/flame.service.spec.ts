import { TestBed } from '@angular/core/testing';

import { FlameService } from './flame.service';

describe('FlameService', () => {
  let service: FlameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


