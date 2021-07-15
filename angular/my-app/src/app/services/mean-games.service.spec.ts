import { TestBed } from '@angular/core/testing';

import { MeanGamesService } from './mean-games.service';

describe('MeanGamesService', () => {
  let service: MeanGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeanGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
