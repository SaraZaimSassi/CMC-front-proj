import { TestBed } from '@angular/core/testing';

import { ChefPolService } from './chef-pol.service';

describe('ChefPolService', () => {
  let service: ChefPolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefPolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
